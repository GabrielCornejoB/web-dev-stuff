import useLinks from "../useLinks";
import { Card } from "..";
import CardSkeleton from "../Card/CardSkeleton";
import s from "./CardGrid.module.scss";

function CardGrid() {
  const { data: links, error, isLoading } = useLinks();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleGridSpaces = () => {
    if (links) {
      const count = 9 - links.length;
      return [...Array(count).keys()];
    }
    return [];
  };

  if (error) return <p>error</p>;
  return (
    <main className={s.grid}>
      {isLoading &&
        skeletons.map((skeleton) => <CardSkeleton key={skeleton} />)}
      {links?.map((link) => (
        <Card key={link.id} link={link} />
      ))}
      {links && links.length < 9
        ? handleGridSpaces().map((index) => <span key={index}></span>)
        : null}
    </main>
  );
}
export default CardGrid;
