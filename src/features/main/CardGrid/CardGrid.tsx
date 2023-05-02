import { Card } from "..";
import s from "./CardGrid.module.scss";
import useLinks from "../useLinks";

function CardGrid() {
  const { data: links, isLoading, error } = useLinks();

  const handleGridSpaces = () => {
    if (links !== undefined) {
      const count = 9 - links.length;
      return [...Array(count).keys()];
    }
    return [];
  };

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>error</p>;
  return (
    <main className={s.grid}>
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
