"use client";

import { useEffect, useRef, useState } from "react";
import { Settings, User, LogOut, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { logout, getCurrentUser } = useAuth();

  const user = getCurrentUser();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div className="relative" ref={ref}>
      {/* PROFILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 py-1 rounded-lg border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
      >
        <Image
          src="/logo/logo.png"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="text-sm font-medium text-gray-700">
          {user?.email || "User"}
        </span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden p-3">
          {/* PROFILE */}
          <button
            onClick={() => router.push("/profile")}
            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-green-50 text-gray-700 text-sm cursor-pointer"
          >
            <User size={16} /> Profile
          </button>

          {/* SETTINGS */}
          <button
            onClick={() => router.push("/settings")}
            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-green-50 text-gray-700 text-sm cursor-pointer"
          >
            <Settings size={16} /> Settings
          </button>

          {/* SECURITY */}
          <button
            onClick={() => router.push("/settings/security")}
            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-green-50 text-gray-700 text-sm cursor-pointer"
          >
            <Shield size={16} /> Security
          </button>

          {/* DIVIDER */}
          <div className="border-t my-1 border-gray-300" />

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="mt-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 hover:scale-101 transition w-full cursor-pointer"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
