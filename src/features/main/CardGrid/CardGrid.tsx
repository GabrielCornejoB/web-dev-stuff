import { Card } from "..";
import s from "./CardGrid.module.scss";

function CardGrid() {
  const data = [1, 2, 4, 5];

  const handleGridSpaces = () => {
    const count = 9 - data.length;
    return [...Array(count).keys()];
  };

  return (
    <main className={s.grid}>
      {data.map((c, index) => (
        <Card key={index} description="c" />
      ))}
      {data.length < 9 &&
        handleGridSpaces().map((index) => <span key={index}></span>)}
    </main>
  );
}
export default CardGrid;
