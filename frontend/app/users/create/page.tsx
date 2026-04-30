"use client";

import { useState } from "react";
import { inputClass } from "@/lib/styles";
import { UI_TEXT } from "@/contants/ui-texts";
import {
  BookOpen,
  Building2,
  Mail,
  MapPin,
  Phone,
  Shield,
  User,
  UserCircle,
} from "lucide-react";

export default function UsersPage() {
  const [form, setForm] = useState({
    role: "user", // user | professor | admin

    firstName: "",
    middleName: "",
    familyName: "",

    email: "",
    contact: "",

    course: "",
    department: "",

    address: "",

    username: "",
    password: "",

    status: "active",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white text-sm mt-3 rounded-md shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT COLUMN - INPUTS */}
        <div>
          <h2 className="text-lg font-semibold mb-4">User Information</h2>

          <div className="space-y-6">
            {/* ================= PERSONAL DETAILS ================= */}
            <div className="border border-green-200 rounded-md p-4">
              <h3 className="text-sm font-semibold text-green-700 mb-4">
                Personal Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* NAME ROW */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-1">First Name</label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block mb-1">Middle Name</label>
                    <input
                      name="middleName"
                      value={form.middleName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block mb-1">
                      {UI_TEXT.USERS.FORM.FAMILY_NAME}
                    </label>
                    <input
                      name="familyName"
                      value={form.familyName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* CONTACT */}
                <div>
                  <label className="block mb-1">
                    {UI_TEXT.USERS.FORM.CONTACT}
                  </label>
                  <input
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* COURSE */}
                <div>
                  <label className="block mb-1">
                    {UI_TEXT.USERS.FORM.COURSE}
                  </label>
                  <input
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* DEPARTMENT */}
                <div>
                  <label className="block mb-1">
                    {UI_TEXT.USERS.FORM.DEPARTMENT}
                  </label>
                  <input
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* ADDRESS */}
                <div className="md:col-span-2">
                  <label className="block mb-1">Address</label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* ================= ACCOUNT DETAILS ================= */}
            <div className="border border-green-200 rounded-md p-4">
              <h3 className="text-sm font-semibold text-green-700 mb-4">
                Account Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* USERNAME */}
                <div>
                  <label className="block mb-1">
                    {UI_TEXT.USERS.FORM.USERNAME}
                  </label>
                  <input
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="block mb-1">
                    {UI_TEXT.USERS.FORM.PASSWORD}
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* ROLE */}
                <div className="md:col-span-2">
                  <label className="block mb-1">
                    {UI_TEXT.USERS.FORM.ROLE}
                  </label>
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="user">User</option>
                    <option value="professor">Professor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - PREVIEW */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-green-700">Preview</h2>

          <div className="border border-green-200 rounded-md bg-green-50 p-4 space-y-6">
            {/* ================= PERSONAL INFO ================= */}
            <div>
              <h3 className="text-sm font-semibold text-green-700 mb-3">
                Personal Information
              </h3>

              <div className="space-y-4">
                {/* NAME */}
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-green-600 mt-1" />
                  <div>
                    <p className="text-xs text-green-600">Full Name</p>
                    <p className="font-medium text-green-900">
                      {[form.firstName, form.middleName, form.familyName]
                        .filter(Boolean)
                        .join(" ") || "-"}
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-green-600 mt-1" />
                  <div>
                    <p className="text-xs text-green-600">Email</p>
                    <p className="font-medium text-green-900">
                      {form.email || "-"}
                    </p>
                  </div>
                </div>

                {/* CONTACT */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-green-600 mt-1" />
                  <div>
                    <p className="text-xs text-green-600">Contact</p>
                    <p className="font-medium text-green-900">
                      {form.contact || "-"}
                    </p>
                  </div>
                </div>

                {/* COURSE */}
                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-green-600 mt-1" />
                  <div>
                    <p className="text-xs text-green-600">Course</p>
                    <p className="font-medium text-green-900">
                      {form.course || "-"}
                    </p>
                  </div>
                </div>

                {/* DEPARTMENT */}
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-green-600 mt-1" />
                  <div>
                    <p className="text-xs text-green-600">Department</p>
                    <p className="font-medium text-green-900">
                      {form.department || "-"}
                    </p>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-green-600 mt-1" />
                  <div>
                    <p className="text-xs text-green-600">Address</p>
                    <p className="font-medium text-green-900">
                      {form.address || "-"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-green-200" />

            {/* ================= ACCOUNT INFO ================= */}
            <div>
              <h3 className="text-sm font-semibold text-green-700 mb-3">
                Account Information
              </h3>

              <div className="space-y-4">
                {/* USERNAME */}
                <div className="flex items-start gap-3">
                  <UserCircle className="w-4 h-4 text-green-600 mt-1" />
                  <div>
                    <p className="text-xs text-green-600">Username</p>
                    <p className="font-medium text-green-900">
                      {form.username || "-"}
                    </p>
                  </div>
                </div>

                {/* ROLE */}
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-green-600 mt-1" />
                  <div>
                    <p className="text-xs text-green-600">Role</p>
                    <p className="font-medium text-green-900 capitalize">
                      {form.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
