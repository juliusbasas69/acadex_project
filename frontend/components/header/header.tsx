"use client";

import Image from "next/image";
import { Bell, Activity, ListTodo } from "lucide-react";
import { useSidebar } from "@/hooks/useSidebar";
import ProfileDropdown from "@/components/header/ProfileDropdown";

export default function Header() {
  const { setOpen } = useSidebar();

  return (
    <header className="max-w-7xl mx-auto w-full bg-white flex items-center py-1 h-16">
      {/* LEFT */}
      <div className="flex items-center gap-3 flex-1 ">
        <button
          onClick={() => setOpen(true)}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-green-100 transition text-lg cursor-pointer"
        >
          ☰
        </button>
        <h1 className="text-md font-semibold text-gray-700">
          University of Cebu - Main Campus
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg border border-gray-300 hover:bg-purple-100 hover:border-purple-500 transition relative cursor-pointer">
          <ListTodo size={16} className="text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
        </button>

        <button className="p-2 rounded-lg border border-gray-300 hover:bg-blue-100 hover:border-blue-500 transition relative cursor-pointer">
          <Activity size={16} className="text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>

        {/* NOTIFICATIONS */}
        <button className="p-2 rounded-lg border border-gray-300 hover:bg-green-100 hover:border-green-500 transition relative cursor-pointer">
          <Bell size={16} className="text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* PROFILE */}
        <div className="ml-2">
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}
