import s from "./Card.module.scss";

interface Props {
  name: string;
  url: string;
  imageUrl: string;
}

function Card({ name, url, imageUrl }: Props) {
  return (
    <a href={url} target="_blank" className={`${s.cardContainer} ${s.card}`}>
      <img src={imageUrl} alt={name} width="50%" height="50%" />
      <h3>{name}</h3>
    </a>
  );
}
export default Card;
