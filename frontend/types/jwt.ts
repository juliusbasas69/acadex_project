export type JwtPayload = {
  email: string;
  role: string;
  exp?: number;
  iat?: number;
};
