"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { ERROR_MESSAGES } from "@/contants/errors";

export default function Login() {
  const { login, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      await login({ email, password });
    } catch (error: unknown) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS,
        );
        return;
      }

      setError(ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Logo + Title */}
        <div className="flex flex-row items-center gap-2 mb-6">
          <Image
            src="/logo/logo.png"
            alt="Acadex Logo"
            width={180}
            height={180}
            className="w-10 h-10"
            priority
          />
          <span className="text-2xl font-bold text-green-600">Acadex</span>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {error && (
          <p className="mt-3 text-sm text-red-600 text-center">{error}</p>
        )}

        <div className="flex flex-col">
          <div className="flex flex-col mb-3">
            <label className="text-sm mb-1">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Password</label>
            <input
              type="password"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-sm my-2 text-right text-gray-500 cursor-pointer hover:text-green-600">
            Forgot Password?
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            disabled={loading}
            className="mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">or continue with</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:scale-105 transition mb-3 w-full cursor-pointer"
          >
            <FcGoogle size={20} />
            <span>Continue with Google</span>
          </button>

          {/* Facebook */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:scale-105 transition w-full cursor-pointer"
          >
            <FaFacebook size={20} className="text-blue-600" />
            <span>Continue with Facebook</span>
          </button>
          <div className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-green-600 font-medium cursor-pointer"
            >
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
