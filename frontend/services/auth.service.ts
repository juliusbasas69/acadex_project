import { api } from "@/lib/api";
import { ERROR_MESSAGES } from "@/contants/errors";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const authService = {
  login: async (data: { email: string; password: string }) => {
    const res = await api(`${BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(
        result.message || ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS,
      );
    }

    return result;
  },
};
