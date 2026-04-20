"use client";

import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";
import Breadcrumb from "@/components/header/Breadcrumb";
import "../globals.css";
import { SidebarProvider } from "@/providers/SidebarProvider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="w-full flex flex-col min-h-screen bg-green-50">
        <Sidebar />
        <Header />
        <Breadcrumb />
        <main>{children}</main>
      </div>
    </SidebarProvider>
  );
}
