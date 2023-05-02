import { useQuery } from "@tanstack/react-query";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import Link from "./Link";

const collectionRef = collection(db, "links");

const getAll = async () => {
  // const q = query(collectionRef, where("category", "==", "icons"));
  const data = await getDocs(collectionRef);
  const docs = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return docs as Link[];
};

const useLinks = () =>
  useQuery({
    queryKey: ["links"],
    queryFn: getAll,
    staleTime: 10000,
  });

export default useLinks;