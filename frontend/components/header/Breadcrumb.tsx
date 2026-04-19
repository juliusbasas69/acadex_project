"use client";

import { usePathname } from "next/navigation";
import { ChevronRight, LayoutDashboard, Info } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const formatLabel = (text: string) => {
    return text.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 px-6 py-2 flex items-center justify-between">
      {/* LEFT - BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-600">
        <div className="flex items-center gap-1 hover:text-gray-900 cursor-pointer">
          <LayoutDashboard size={14} />
          <span>Dashboard</span>
        </div>

        {segments.map((seg, index) => {
          const isLast = index === segments.length - 1;

          return (
            <div key={index} className="flex items-center">
              <ChevronRight size={14} className="mx-2 text-gray-400" />

              <span
                className={`${
                  isLast
                    ? "text-gray-900 font-medium"
                    : "hover:text-gray-900 cursor-pointer"
                }`}
              >
                {formatLabel(seg)}
              </span>
            </div>
          );
        })}
      </div>

      {/* RIGHT - ANNOUNCEMENT */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-medium">
          <Info size={14} />
          <span>System in development phase</span>
        </div>
      </div>
    </div>
  );
}
