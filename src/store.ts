import { create } from "zustand";

export interface LinkQuery {
  categoryId?: number;
  searchText?: string;
}

interface QueryStore {
  linkQuery: LinkQuery;
  setSearchtext: (searchText: string) => void;
  setCategoryId: (categoryId: number | undefined) => void;
  resetQuery: () => void;
}

const useQueryStore = create<QueryStore>((set) => ({
  linkQuery: {},
  setSearchtext: (searchText) => set(() => ({ linkQuery: { searchText } })),
  setCategoryId: (categoryId) => set(() => ({ linkQuery: { categoryId } })),
  resetQuery: () => set(() => ({ linkQuery: {} })),
}));

export default useQueryStore;
