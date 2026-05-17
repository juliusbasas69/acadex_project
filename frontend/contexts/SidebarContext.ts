import { createContext } from "react";

export type SidebarContext = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const SidebarContext = createContext<SidebarContext | undefined>(
  undefined,
);
