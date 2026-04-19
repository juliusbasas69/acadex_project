"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Bell,
  Book,
  Calendar,
  FileText,
  Code,
  Folder,
  Briefcase,
  LifeBuoy,
  AlertTriangle,
  RefreshCw,
  LogOut,
  ChevronLeft,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false); // closed initially
  const pathname = usePathname();

  const menu = [
    {
      title: "Overview",
      items: [
        { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
        { name: "Notifications", icon: Bell, path: "/notifications" },
      ],
    },
    {
      title: "Academics",
      items: [
        { name: "Course", icon: Book, path: "/course" },
        { name: "Calendar", icon: Calendar, path: "/calendar" },
        { name: "Assignments", icon: FileText, path: "/assignments" },
        { name: "Learning Materials", icon: Folder, path: "/materials" },
        { name: "Practical Coding", icon: Code, path: "/coding" },
        { name: "Files", icon: Folder, path: "/files" },
      ],
    },
    {
      title: "Development",
      items: [{ name: "Workspace", icon: Briefcase, path: "/workspace" }],
    },
    {
      title: "Support",
      items: [
        { name: "Support", icon: LifeBuoy, path: "/support" },
        { name: "Report", icon: AlertTriangle, path: "/report" },
        { name: "Updates", icon: RefreshCw, path: "/updates" },
      ],
    },
  ];

  return (
    <>
      {/* OPEN BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-40 text-black border border-gray-300 p-1 rounded-lg shadow-lg hover:bg-green-50 hover:scale-105 transition cursor-pointer"
      >
        <Menu />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-2xl z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        flex flex-col p-4`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Image src="/logo/logo.png" alt="logo" width={32} height={32} />
            <span className="text-xl font-bold text-green-600">Acadex</span>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-lg hover:bg-green-100 hover:scale-105 transition cursor-pointer border border-gray-300 rounded-md"
          >
            <ChevronLeft />
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto">
          {menu.map((section, i) => (
            <div key={i} className="mb-4">
              <p className="text-xs text-gray-400 mb-2 uppercase">
                {section.title}
              </p>

              {section.items.map((item, j) => {
                const Icon = item.icon;
                const isActive = pathname === item.path;

                return (
                  <div
                    key={j}
                    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition relative
                    ${
                      isActive
                        ? "bg-green-100 text-green-700 font-medium"
                        : "hover:bg-green-50 text-gray-700"
                    }
                  `}
                  >
                    {/* GREEN LINE */}
                    {isActive && (
                      <div className="absolute left-0 top-1 bottom-1 w-1 bg-green-600 rounded-r"></div>
                    )}

                    <Icon size={18} />
                    <span className="text-sm">{item.name}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Logout */}
        <button className="mt-auto flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition">
          <LogOut size={18} />
          Logout
        </button>
      </aside>
    </>
  );
}
