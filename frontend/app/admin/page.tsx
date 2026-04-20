"use client";

import { useAuth } from "@/hooks/useAuth";

export default function AdminDashboard() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Logouts
      </button>
    </div>
  );
}
