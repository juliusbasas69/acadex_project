"use client";

import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";
import { getUserFromToken } from "@/lib/jwt";
import { LoginRequest } from "@/types/LoginRequest";
import { useEffect, useState } from "react";
import { User } from "@/types/User";
import { ROLES } from "@/contants/roles";

export const useAuth = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const login = async (data: LoginRequest) => {
    try {
      setLoading(true);

      const res = await authService.login(data);

      document.cookie = `token=${res.token}; path=/; max-age=86400`;

      const decodedUser = getUserFromToken(res.token);

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

  return {
    login,
    logout,
    loading,
  };
};
