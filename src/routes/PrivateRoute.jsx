import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(user);
  // console.log(loading);
  // console.log(location);
  // === loading check ===
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
          <span className="loading loading-bars loading-xl"></span>
        </div>
      </div>
    );
  }

  // === use check ===
  if (user) {
    return children;
  }

  // === if no user then go to login page ===
  return (
    <>
      <Navigate to="/login" state={{ from: location.pathname }}></Navigate>
    </>
  );
};

export default PrivateRoute;
