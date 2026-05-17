export const ROLES = {
  ADMIN: "ADMIN",
  PROFESSOR: "PROFESSOR",
  STUDENT: "STUDENT",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
