import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/blog");
  }

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/blog">My Blog</Link>
      <div className="d-flex gap-3 align-items-center">
        <Link className="text-white" to="/blog">Blog</Link>
        {/* Only show Admin and Log Out when logged in. */}
        {isAuthenticated ? (
          <>
            <Link className="text-white" to="/admin">Admin</Link>
            <button className="btn btn-danger" onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <Link className="btn btn-primary" to="/login">Log In</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
