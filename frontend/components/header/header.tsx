"use client";

import { Bell, Activity, ListTodo } from "lucide-react";
import { useSidebar } from "@/hooks/useSidebar";
import ProfileDropdown from "@/components/header/ProfileDropdown";

export default function Header() {
  const { setOpen } = useSidebar();

  return (
    <header className="w-full bg-white px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 md:h-16">
        {/* LEFT */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => setOpen(true)}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-green-100 transition text-lg"
          >
            ☰
          </button>

          <h1 className="text-sm md:text-base font-semibold text-gray-700 truncate">
            University of Cebu - Main Campus
          </h1>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Hide less important icons on small screens */}
          <button className="hidden sm:flex p-2 rounded-lg border border-gray-300 hover:bg-purple-100 hover:border-purple-500 transition relative">
            <ListTodo size={16} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
          </button>

          <button className="hidden sm:flex p-2 rounded-lg border border-gray-300 hover:bg-blue-100 hover:border-blue-500 transition relative">
            <Activity size={16} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>

          <button className="p-2 rounded-lg border border-gray-300 hover:bg-green-100 hover:border-green-500 transition relative">
            <Bell size={16} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="ml-1 md:ml-2">
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}
