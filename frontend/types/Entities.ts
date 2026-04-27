import { Role } from "@/contants/roles";

export type User = {
  id: string;
  email: string;
  role: Role;
};
