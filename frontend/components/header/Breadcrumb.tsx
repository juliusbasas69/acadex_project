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
    <div className="max-w-7xl mx-auto w-full bg-white border border-gray-200 px-4 md:px-6 py-2 mt-4 md:mt-6 rounded-md shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      {/* LEFT - BREADCRUMB */}
      <div className="flex items-center text-xs sm:text-sm text-gray-600 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex items-center gap-1 hover:text-gray-900 cursor-pointer shrink-0">
          <LayoutDashboard size={14} />
          <span>Dashboard</span>
        </div>

        {segments.map((seg, index) => {
          const isLast = index === segments.length - 1;

          return (
            <div key={index} className="flex items-center shrink-0">
              <ChevronRight size={14} className="mx-1 text-gray-400" />

              <span
                className={`whitespace-nowrap ${
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
      <div className="flex items-center sm:justify-end">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-medium w-fit">
          <Info size={14} />
          <span className="truncate max-w-[200px] sm:max-w-none">
            System in development phase
          </span>
        </div>
      </div>
    </div>
  );
}
