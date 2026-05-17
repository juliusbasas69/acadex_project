"use client";

import CreateButton from "@/components/ui/buttons/CreateButton";
import DeleteButton from "@/components/ui/buttons/DeleteButton";
import EditButton from "@/components/ui/buttons/EditButton";
import ExportButton from "@/components/ui/buttons/ExportButton";
import ExportExcelButton from "@/components/ui/buttons/ExportButton";
import GenerateExcelButton from "@/components/ui/buttons/GenerateExcelButton";
import ImportButton from "@/components/ui/buttons/ImportButton";
import { ROUTES } from "@/contants/routes";
import {
  Activity,
  Download,
  Edit,
  FileSpreadsheet,
  GraduationCap,
  Search,
  Shield,
  Trash2,
  Upload,
  User,
  UserCog,
  UserPlus,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UsersPage() {
  const router = useRouter();
  const [activeUserTab, setActiveUserTab] = useState("all");

  const users = [
    {
      id: 1,
      fullName: "Jonathan Alexander Doe",
      email: "jonathan.alex@gmail.com",
      contact: "+63922222326",
      section: "A",
      course: "BSIT",
      year: "3rd Year",
      role: "STUDENT",
    },
    {
      id: 2,
      fullName: "Elizabeth Grace Smith",
      email: "elizabeth.smith@gmail.com",
      contact: "+63922222326",
      section: "B",
      course: "BSCS",
      year: "2nd Year",
      role: "PROFESSOR",
    },
    {
      id: 3,
      fullName: "Michael Anthony Brown",
      email: "michael.brown@gmail.com",
      contact: "+63922222326",
      section: "C",
      course: "BSIT",
      year: "4th Year",
      role: "ADMIN",
    },
  ];

  const stats = [
    { title: "Total Users", icon: Users },
    { title: "Students", icon: GraduationCap },
    { title: "Professors", icon: UserCog },
    { title: "Admins", icon: Shield },
    { title: "Active Now", icon: Activity },
  ];

  const userTabs = ["all", "student", "professor", "admin"];

  const filteredUsers =
    activeUserTab === "all"
      ? users
      : users.filter((u) => u.role === activeUserTab);

  const roleStyle = (role) => {
    switch (role) {
      case "student":
        return "bg-blue-50 text-blue-600 border-blue-200";
      case "professor":
        return "bg-purple-50 text-purple-600 border-purple-200";
      case "admin":
        return "bg-green-50 text-green-600 border-green-200";
      default:
        return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  const roleIcon = (role) => {
    switch (role) {
      case "student":
        return <GraduationCap size={14} />;
      case "professor":
        return <UserCog size={14} />;
      case "admin":
        return <Shield size={14} />;
      default:
        return <User size={14} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white text-sm mt-3 rounded-md shadow-md">
      {/* 🔥 TOP TABS (UNCHANGED) */}

      <div className="flex items-center gap-2 mb-4">
        <Users className="text-green-600" size={20} />

        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            User Management
          </h1>
          <p className="text-sm text-gray-500">
            Manage students, professors, and admins
          </p>
        </div>
      </div>

      {/* 🔥 STATS CARDS (UNCHANGED) */}
      <div className="grid grid-cols-5 gap-3 mb-6">
        {stats.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="relative border border-gray-300 rounded-xl p-3 hover:shadow-sm transition"
            >
              {/* TOP RIGHT ICON */}
              <Icon
                size={28}
                className="absolute top-3 right-3 text-gray-400 border border-gray-300 p-1 rounded-md"
              />

              <p className="text-xs text-gray-500">{item.title}</p>
              <p className="text-lg font-semibold">0</p>
            </div>
          );
        })}
      </div>

      {/* 🔥 TOOLBAR (UNCHANGED) */}
      <div className="flex items-center justify-between mb-4">
        {/* LEFT ACTIONS */}
        <div className="flex gap-2 flex-wrap">
          <ImportButton onClick={() => {}} />
          <ExportButton onClick={users} />
          <GenerateExcelButton onClick={{}} />
        </div>

        {/* RIGHT SEARCH + CREATE USER */}
        <div className="flex items-center gap-2">
          {/* SEARCH INPUT */}
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search users..."
              className="
              border border-gray-300 rounded-lg pl-9 pr-3 py-1.5 w-64
              focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition
            "
            />
          </div>

          {/* CREATE BUTTON */}
          <CreateButton
            icon={<UserPlus size={16} />}
            label="Create User"
            onClick={() => {
              router.push(ROUTES.CREATE_USER);
            }}
          />
        </div>
      </div>

      {/* 🔥 ROLE TABS (FIXED STATE ONLY) */}
      <div className="flex gap-2 border-b border-gray-300">
        {userTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveUserTab(tab)}
            className={`
              px-4 py-2 text-sm capitalize border-b-2 transition
              ${
                activeUserTab === tab
                  ? "border-green-600 text-green-600 font-semibold"
                  : "border-transparent text-gray-500 hover:text-green-600"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🔥 TABLE (UPGRADED ONLY) */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-600">
            <tr>
              <th className="p-3 text-left">Full Name</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Section</th>
              <th className="p-3 text-left">Course</th>
              <th className="p-3 text-left">Year</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t border-dashed border-gray-200 hover:bg-green-50 transition"
              >
                {/* NAME */}
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-gray-500" />
                    <div>
                      <div className="font-medium">{user.fullName}</div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">{user.contact}</td>
                <td className="p-3">{user.section}</td>
                <td className="p-3">{user.course}</td>
                <td className="p-3">{user.year}</td>

                {/* ROLE */}
                <td className="p-3">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full border ${roleStyle(
                      user.role,
                    )}`}
                  >
                    {roleIcon(user.role)}
                    <span className="capitalize">{user.role}</span>
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="p-3">
                  <div className="flex justify-center gap-2">
                    <EditButton onClick={() => {}} />

                    <DeleteButton onClick={() => {}} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
