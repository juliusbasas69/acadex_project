import { createContext } from "react";

export type SidebarContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);
