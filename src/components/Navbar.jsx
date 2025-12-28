import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleUserSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("log out successful");
      })
      .catch(() => {
        toast.error("log out failed");
      });
  };
  const links = (
    <div className="flex gap-6 itmes-center">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn btn-sm btn-success" : "btn btn-sm btn-error"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "btn btn-sm btn-success" : "btn btn-sm btn-error"
          }
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/privacy"
          className={({ isActive }) =>
            isActive ? "btn btn-sm btn-success" : "btn btn-sm btn-error"
          }
        >
          Privacy
        </NavLink>
      </li>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Chill Mountain Trekkers</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2 items-center">
            <div className="">
              {user && user?.displayName && <p>{user.displayName}</p>}
            </div>
            <div className="">
              {user ? (
                <button
                  onClick={handleUserSignOut}
                  className="btn btn-sm btn-error"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="btn btn-info">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
