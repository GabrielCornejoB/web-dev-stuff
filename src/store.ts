import { create } from "zustand";

interface LinkQuery {
  categoryId?: number;
}

interface QueryStore {
  linkQuery: LinkQuery;
  setCategoryId: (categoryId: number | undefined) => void;
}

const useQueryStore = create<QueryStore>((set) => ({
  linkQuery: {},
  setCategoryId: (categoryId) =>
    set(() => (categoryId ? { linkQuery: { categoryId } } : { linkQuery: {} })),
}));

export default useQueryStore;
