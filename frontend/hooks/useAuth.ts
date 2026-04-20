"use client";

import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";
import { getUserFromToken } from "@/lib/jwt";
import { LoginRequest } from "@/types/LoginRequest";
import { useState } from "react";
import { ROLES } from "@/contants/roles";
import { User } from "@/types/User";

export const useAuth = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const login = async (data: LoginRequest) => {
    try {
      setLoading(true);

      const res = await authService.login(data);

      document.cookie = `token=${res.token}; path=/; max-age=86400`;

      const decodedUser = getUserFromToken(res.token);

      if (!decodedUser) throw new Error("Invalid Token");

      if (decodedUser?.role === ROLES.ADMIN) {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    // remove token
    document.cookie = "token=; path=/; max-age=0";

    // redirect to login
    router.push("/login");
  };

  const getCurrentUser = (): User | null => {
    if (typeof window === "undefined") return null;

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (!token) return null;

    return getUserFromToken(token);
  };

  return {
    login,
    logout,
    getCurrentUser,
    loading,
  };
};
