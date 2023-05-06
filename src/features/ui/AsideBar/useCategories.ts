import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/supabaseClient";

const getAll = async () => {
  const { data } = await supabase.from("categories").select("*");
  return data;
};

const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: getAll,
    staleTime: 10000,
  });

export default useCategories;
