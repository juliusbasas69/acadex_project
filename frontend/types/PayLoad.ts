import { Role } from "@/contants/roles";

export type JwtPayload = {
  sub: string;
  email: string;
  role: Role;
  iat: number;
  exp: number;
};
