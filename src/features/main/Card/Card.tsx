import { useState } from "react";
import s from "./Card.module.scss";
import { Link } from "../../../supabase/schema";

interface Props {
  link: Link;
}

function Card({ link }: Props) {
  const [isInitial, setIsInitial] = useState(true);

  return (
    <a
      href={link.url}
      target="_blank"
      className={`${s.cardContainer} ${s.card}`}
      onContextMenu={(e) => e.preventDefault()}
      onAuxClick={() => setIsInitial(!isInitial)}
      title="Click to open, Right click to show more info"
    >
      {isInitial ? (
        <>
          <img
            src={link.image_url}
            alt={link.page_name}
            width="50%"
            height="50%"
          />
          <h3>{link.page_name}</h3>
        </>
      ) : (
        <p>hola mundo</p>
      )}
    </a>
  );
}
export default Card;
