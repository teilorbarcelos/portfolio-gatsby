import { create } from "zustand";

interface UseRouterState {
  pathname: string;
}

interface UseRouterActions {
  setPathname: (pathname: string) => void;
}

export const useRouterStore = create<UseRouterState & UseRouterActions>(
  (set) => ({
    pathname: "/",
    setPathname: (pathname: string) => set(() => ({ pathname })),
  })
);
