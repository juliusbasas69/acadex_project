"use client";

import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";
import Breadcrumb from "@/components/header/Breadcrumb";
import { SidebarProvider } from "@/providers/SidebarProvider";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1 min-w-0">
          <Header />
          <div className="px-4 md:px-6">
            <Breadcrumb />
          </div>
          <main className="flex-1 px-4 md:px-6 py-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
