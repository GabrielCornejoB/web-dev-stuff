import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { Card } from "..";
import s from "./CardGrid.module.scss";
import Link from "./Link";

function CardGrid() {
  const [links, setLinks] = useState<Link[]>([]);
  const collectionRef = collection(db, "links");
  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = async () => {
    const data = await getDocs(collectionRef);
    const docs = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    // console.log(docs);
    setLinks(docs as Link[]);
  };

  const handleGridSpaces = () => {
    const count = 9 - links.length;
    return [...Array(count).keys()];
  };
  return (
    <main className={s.grid}>
      {links.map((l) => (
        <Card key={l.id} link={l} />
      ))}
      {links.length < 9 &&
        handleGridSpaces().map((index) => <span key={index}></span>)}
    </main>
  );
}
export default CardGrid;
