import s from "./Card.module.scss";
import Link from "../CardGrid/Link";

interface Props {
  link: Link;
}

function Card({ link }: Props) {
  return (
    <a href={link.url} target="_blank" className={s.card}>
      <img src={link.image_url} alt={link.page_name} />
      <h3>{link.page_name}</h3>
    </a>
  );
}
export default Card;
