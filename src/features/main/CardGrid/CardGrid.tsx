import { Card } from "..";
import s from "./CardGrid.module.scss";
import useLinks from "../useLinks";
import CardSkeleton from "../Card/CardSkeleton";

function CardGrid() {
  const { data: links, isLoading, error } = useLinks();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleGridSpaces = () => {
    if (links !== undefined) {
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
      {links?.map((l) => (
        <Card key={l.id} link={l} />
      ))}
      {links !== undefined && links.length < 9
        ? handleGridSpaces().map((index) => <span key={index}></span>)
        : null}
    </main>
  );
}
export default CardGrid;
