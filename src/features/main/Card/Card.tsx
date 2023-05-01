import s from "./Card.module.scss";
import img from "../../../assets/google.webp";

interface Props {
  description: string;
}

function Card({ description }: Props) {
  return (
    <div className={s.card}>
      <img src={img} alt="" />
      <h3>{description}</h3>
    </div>
  );
}
export default Card;
