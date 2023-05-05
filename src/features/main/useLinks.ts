import { supabase } from "./../../supabase/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const getAll = async () => {
  const { data } = await supabase
    .from("links")
    .select("*")
    .order("page_name", { ascending: true });
  return data;
};

const useLinks = () =>
  useQuery({
    queryKey: ["links"],
    queryFn: getAll,
    staleTime: 10000,
  });
export default useLinks;
