"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Bell,
  Megaphone,
  BarChart3,
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
  GraduationCap,
  ClipboardCheck,
  FolderGit2,
  Upload,
  Users,
  Shield,
  Key,
  Building2,
  Library,
  Files,
  Activity,
  Eye,
  FileSearch,
  Gauge,
  AlertCircle,
  MessageSquare,
  Settings,
  Lock,
  DatabaseBackup,
} from "lucide-react";
import { useSidebar } from "@/hooks/useSidebar";
import { PERMISSIONS } from "@/contants/permissions";
import { useAuth } from "@/hooks/useAuth";
import { canAccess } from "@/lib/rbac/canAccess";
import { Role } from "@/contants/roles";
import { getUserFromToken } from "@/lib/jwt";

export default function Sidebar() {
  const { open, setOpen } = useSidebar();

  const { getCurrentUser } = useAuth();

  const user = getCurrentUser();

  const pathname = usePathname();

  const menu = [
    {
      title: "Overview",
      items: [
        {
          name: "Dashboard",
          icon: LayoutDashboard,
          path: "/dashboard",
          permission: PERMISSIONS.VIEW_DASHBOARD,
        },
        {
          name: "Notifications",
          icon: Bell,
          path: "/notifications",
          permission: PERMISSIONS.VIEW_NOTIFICATIONS,
        },
        {
          name: "Announcements",
          icon: Megaphone,
          path: "/announcements",
          permission: PERMISSIONS.VIEW_NOTIFICATIONS,
        },
        {
          name: "Reports Summary",
          icon: BarChart3,
          path: "/reports-summary",
          permission: PERMISSIONS.VIEW_REPORTS,
        },
      ],
    },

    {
      title: "Academics",
      items: [
        {
          name: "Courses",
          icon: Book,
          path: "/courses",
          permission: PERMISSIONS.VIEW_COURSE,
        },
        {
          name: "Calendar",
          icon: Calendar,
          path: "/calendar",
          permission: PERMISSIONS.VIEW_COURSE,
        },
        {
          name: "Assignments",
          icon: FileText,
          path: "/assignments",
          permission: PERMISSIONS.VIEW_ASSIGNMENTS,
        },
        {
          name: "Learning Materials",
          icon: Folder,
          path: "/materials",
          permission: PERMISSIONS.VIEW_COURSE,
        },
        {
          name: "Grades",
          icon: GraduationCap,
          path: "/grades",
          permission: PERMISSIONS.VIEW_GRADES,
        },
        {
          name: "Attendance",
          icon: ClipboardCheck,
          path: "/attendance",
          permission: PERMISSIONS.VIEW_ATTENDANCE,
        },
        {
          name: "Practical Coding",
          icon: Code,
          path: "/coding",
          permission: PERMISSIONS.USE_WORKSPACE,
        },
      ],
    },

    {
      title: "Development",
      items: [
        {
          name: "Workspace",
          icon: Briefcase,
          path: "/workspace",
          permission: PERMISSIONS.USE_WORKSPACE,
        },
        {
          name: "Projects",
          icon: FolderGit2,
          path: "/projects",
          permission: PERMISSIONS.USE_WORKSPACE,
        },
        {
          name: "Submissions",
          icon: Upload,
          path: "/submissions",
          permission: PERMISSIONS.USE_WORKSPACE,
        },
      ],
    },

    {
      title: "Management",
      items: [
        {
          name: "User Management",
          icon: Users,
          path: "/users",
          permission: PERMISSIONS.VIEW_USERS,
        },
        {
          name: "Role Management",
          icon: Shield,
          path: "/roles",
          permission: PERMISSIONS.MANAGE_ROLES,
        },
        {
          name: "Permission Management",
          icon: Key,
          path: "/permissions",
          permission: PERMISSIONS.MANAGE_PERMISSIONS,
        },
        {
          name: "Department Management",
          icon: Building2,
          path: "/departments",
          permission: PERMISSIONS.MANAGE_DEPARTMENTS,
        },
        {
          name: "Course Management",
          icon: Library,
          path: "/course-management",
          permission: PERMISSIONS.MANAGE_COURSE,
        },
        {
          name: "Content Management",
          icon: Files,
          path: "/content-management",
          permission: PERMISSIONS.MANAGE_CONTENT,
        },
      ],
    },

    {
      title: "Monitoring",
      items: [
        {
          name: "System Monitoring",
          icon: Activity,
          path: "/monitoring/system",
          permission: PERMISSIONS.VIEW_SYSTEM_MONITORING,
        },
        {
          name: "User Activity Logs",
          icon: Eye,
          path: "/monitoring/logs",
          permission: PERMISSIONS.VIEW_LOGS,
        },
        {
          name: "Audit Trail",
          icon: FileSearch,
          path: "/monitoring/audit",
          permission: PERMISSIONS.VIEW_AUDIT_LOGS,
        },
        {
          name: "Performance",
          icon: Gauge,
          path: "/monitoring/performance",
          permission: PERMISSIONS.VIEW_SYSTEM_MONITORING,
        },
        {
          name: "Errors",
          icon: AlertCircle,
          path: "/monitoring/errors",
          permission: PERMISSIONS.VIEW_SYSTEM_MONITORING,
        },
      ],
    },

    {
      title: "Support",
      items: [
        {
          name: "Support Tickets",
          icon: LifeBuoy,
          path: "/support",
          permission: PERMISSIONS.VIEW_DASHBOARD,
        },
        {
          name: "Report Issue",
          icon: AlertTriangle,
          path: "/report",
          permission: PERMISSIONS.VIEW_DASHBOARD,
        },
        {
          name: "Updates",
          icon: RefreshCw,
          path: "/updates",
          permission: PERMISSIONS.VIEW_DASHBOARD,
        },
        {
          name: "Feedback",
          icon: MessageSquare,
          path: "/feedback",
          permission: PERMISSIONS.VIEW_DASHBOARD,
        },
      ],
    },

    {
      title: "Settings",
      items: [
        {
          name: "General Settings",
          icon: Settings,
          path: "/settings",
          permission: PERMISSIONS.MANAGE_SETTINGS,
        },
        {
          name: "Security Settings",
          icon: Lock,
          path: "/settings/security",
          permission: PERMISSIONS.MANAGE_SETTINGS,
        },
        {
          name: "Backup & Restore",
          icon: DatabaseBackup,
          path: "/settings/backup",
          permission: PERMISSIONS.MANAGE_SETTINGS,
        },
      ],
    },
  ];

  const filteredMenu = menu
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        user?.role ? canAccess(user.role, item.permission) : false,
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <>
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
          {filteredMenu.map((section, i) => (
            <div key={i} className="mb-4">
              <p className="text-xs text-gray-400 mb-2 uppercase">
                {section.title}
              </p>

              {section.items.map((item, j) => {
                const Icon = item.icon;
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={j}
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 p-2 rounded-lg transition relative
                    ${
                      isActive
                        ? "bg-green-100 text-green-700 font-medium"
                        : "hover:bg-green-50 text-gray-700"
                    }`}
                  >
                    {/* GREEN LINE */}
                    {isActive && (
                      <div className="absolute left-0 top-1 bottom-1 w-1 bg-green-600 rounded-r"></div>
                    )}

                    <Icon size={18} />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Logout */}
        {/* <button className="mt-auto flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition">
          <LogOut size={18} />
          Logout
        </button> */}
      </aside>
    </>
  );
}
