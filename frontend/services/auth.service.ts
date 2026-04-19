import { api } from "@/lib/axios";
import axios from "axios";
import { ERROR_MESSAGES } from "@/contants/errors";

export const authService = {
  login: async (data: { email: string; password: string }) => {
    try {
      const res = await api.post("/auth/login", data);
      return res.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message ||
          ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS;

        throw new Error(message);
      }

      throw new Error(ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS);
    }
  },
};
