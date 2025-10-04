import { create } from "zustand";

type CategoryProps = {
  id: string;
  application: string;
  name: string;
  translations: {
    en: {
      name: string;
    };
  };
};

export type BlogProps = {
  id: string;
  application: string;
  categoryIds: string[];
  content: {
    htmlContent: string;
    serializedState: string;
  };
  description: string;
  name: string;
  slug: string;
  status: string;
  thumbnail: string;
  createdAt: string;
  translations: {
    en: {
      name: string;
      description: string;
      content: {
        htmlContent: string;
        serializedState: string;
      };
    };
  };
};

type State = {
  listCategory: CategoryProps[];
  idSection: string;
};

type Actions = {
  setCategories: (listCategory: CategoryProps[]) => void;
  setSectionId: (idSection: string) => void;
  reset: () => void;
};

const initialState: State = {
  listCategory: [],
  idSection: "about",
};

export const useStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  setCategories(listCategory: CategoryProps[]) {
    set({ listCategory });
  },
  setSectionId(idSection: string) {
    set({ idSection });
  },
  reset() {
    set(initialState);
  },
}));
