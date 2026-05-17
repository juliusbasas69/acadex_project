import { api } from "@/lib/axios";
import axios from "axios";
import { ERROR_MESSAGES } from "@/contants/errors";
import { LoginRequest } from "@/types/Request";

export const authService = {
  async login(request: LoginRequest) {
    try {
      const { data: res } = await api.post("/auth/login", request);
      return res;
    } catch (error) {
      const message = axios.isAxiosError(error)
        ? error.response?.data.message
        : null;

      throw new Error(message || ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS);
    }
  },
};
