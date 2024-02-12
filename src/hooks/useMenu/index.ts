import { create } from "zustand";

interface UseMenuState {
  isOpen: boolean;
}

interface UseMenuActions {
  toggleMenu: () => void;
}

export const useMenuStore = create<UseMenuState & UseMenuActions>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
