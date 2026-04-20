"use client";

import Image from "next/image";
import { Bell, Activity, ListTodo } from "lucide-react";
import { useSidebar } from "@/hooks/useSidebar";

export default function Header() {
  const { setOpen } = useSidebar();

  return (
    <header className="w-full bg-white border-b-2 flex items-center py-1 px-3 border-gray-300">
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
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-1 py-1 rounded-lg transition ml-2 border border-gray-300">
          <Image
            src="/logo/logo.png"
            alt="Profile"
            width={24}
            height={24}
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
