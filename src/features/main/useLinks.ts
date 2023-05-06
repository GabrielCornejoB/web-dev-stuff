import useQueryStore, { LinkQuery } from "../../store";
import { supabase } from "./../../supabase/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const getAll = async (q: LinkQuery) => {
  let query = supabase.from("links").select("*");
  if (q.categoryId) {
    query = query.eq("category_id", q.categoryId);
  } else if (q.searchText) {
    query = query.ilike("page_name", `%${q.searchText}%`);
  } else {
    query = query.order("page_name", { ascending: true });
  }
  const { data } = await query;
  return data;
};

const useLinks = () => {
  const linkQuery = useQueryStore((s) => s.linkQuery);
  return useQuery({
    queryKey: ["links", linkQuery],
    queryFn: () => getAll(linkQuery),
    staleTime: 10000,
  });
};
export default useLinks;
