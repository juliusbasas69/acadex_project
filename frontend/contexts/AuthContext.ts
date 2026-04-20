"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { User } from "@/types/User";
import { LoginRequest } from "@/types/LoginRequest";
import { authService } from "@/services/auth.service";
import { getUserFromToken } from "@/lib/jwt";
import { ROLES } from "@/contants/roles";

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (data: LoginRequest) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
