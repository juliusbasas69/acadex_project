import { jwtDecode } from "jwt-decode";
import { User } from "@/types/User";
import { Role } from "@/contants/roles";

type JwtPayload = {
  sub: string;
  email: string;
  role: Role;
  iat: number;
  exp: number;
};

export const getUserFromToken = (token: string): User | null => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);

    return {
      id: decoded.sub,
      email: decoded.email,
      role: decoded.role,
    };
  } catch {
    return null;
  }
};
