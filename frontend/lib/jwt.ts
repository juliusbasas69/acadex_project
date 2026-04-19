import { jwtDecode } from "jwt-decode";

export const getUserFromToken = (token: string) => {
  try {
    return jwtDecode<{ sub: string; role: string }>(token);
  } catch {
    return null;
  }
};
