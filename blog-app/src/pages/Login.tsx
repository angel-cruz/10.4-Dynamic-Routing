import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  // If already logged in, there is no reason to show Login again.
  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  function handleLogin() {
    login();
    navigate("/admin");
  }

  return (
    <div className="card p-4">
      <h1>Login</h1>
      <p>Click below to simulate logging in.</p>
      <button className="btn btn-primary" onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
