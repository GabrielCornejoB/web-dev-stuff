import useQueryStore from "../../store";
import { supabase } from "./../../supabase/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const getAll = async (categoryId: number | undefined) => {
  let query = supabase.from("links").select("*");
  query = categoryId
    ? query.eq("category_id", categoryId)
    : query.order("page_name", { ascending: true });

  const { data } = await query;
  return data;
};

const useLinks = () => {
  const linkQuery = useQueryStore((s) => s.linkQuery);
  return useQuery({
    queryKey: ["links", linkQuery],
    queryFn: () => getAll(linkQuery.categoryId),
    staleTime: 10000,
  });
};
export default useLinks;
