import s from "./CardGrid.module.scss";

function CardGrid() {
  return (
    <main className={s.grid}>
      <div className={s.cartica}>
        <h3>1</h3>
      </div>
      <div className={s.cartica}>
        <h3>2</h3>
      </div>
      <div className={s.cartica}>
        <h3>3</h3>
      </div>
      <div className={s.cartica}>
        <h3>4</h3>
      </div>
      <div className={s.cartica}>
        <h3>5</h3>
      </div>
      <div className={s.cartica}>
        <h3>6</h3>
      </div>
      <div className={s.cartica}>
        <h3>7</h3>
      </div>
      <div className={s.cartica}>
        <h3>8</h3>
      </div>
    </main>
  );
}
export default CardGrid;
