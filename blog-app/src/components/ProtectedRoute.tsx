import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  // If the user is logged out, send them to the login page.
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Outlet displays the admin page when the user is logged in.
  return <Outlet />;
}

export default ProtectedRoute;
