"use client";

import { useAuth } from "@/hooks/useAuth";
import AdminDashboard from "@/components/dashboards/AdminDashboard";
import StudentDashboard from "@/components/dashboards/StudentDashboard";
import ProfessorDashboard from "@/components/dashboards/ProfessorDashboard";
import LandingPage from "@/components/pages/LandingPage";

export default function Home() {
  const { getCurrentUser } = useAuth();
  const user = getCurrentUser();
  debugger;
  if (!user) return <LandingPage />;

  switch (user.role) {
    case "ADMIN":
      return <AdminDashboard />;
    case "STUDENT":
      return <StudentDashboard />;
    case "PROFESSOR":
      return <ProfessorDashboard />;
    default:
      return <LandingPage />;
  }
}
