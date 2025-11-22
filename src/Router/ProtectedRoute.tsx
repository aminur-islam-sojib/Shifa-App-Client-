import { Navigate } from "react-router";
import { useAuth } from "@/Context/AuthProvider";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  // Show a loader while Firebase is checking auth
  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  // If not logged in → redirect
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If logged in → allow access
  return children;
}
