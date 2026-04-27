import { jwtDecode } from "jwt-decode";
import { User } from "@/types/Entities";
import { JwtPayload } from "@/types/PayLoad";

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
