import s from "./Card.module.scss";

function CardSkeleton() {
  return (
    <div className={`${s.cardContainer} ${s.skeleton}`}>
      <div className={s.imagePlaceholder}></div>
      <div className={s.textPlaceholder}></div>
    </div>
  );
}
export default CardSkeleton;
