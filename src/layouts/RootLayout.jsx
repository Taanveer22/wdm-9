import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Home | Chill Mountain Trekkers";
    } else if (location.pathname === "/login") {
      document.title = "Login | Chill Mountain Trekkers";
    } else if (location.pathname === "/register") {
      document.title = "Register | Chill Mountain Trekkers";
    } else if (location.pathname === "/profile") {
      document.title = "Profile | Chill Mountain Trekkers";
    } else if (location.pathname === "/updateProfile") {
      document.title = "Update Profile | Chill Mountain Trekkers";
    } else if (location.pathname === "/privacy") {
      document.title = "Privacy | Chill Mountain Trekkers";
    } else if (location.pathname === "/forgetPassword") {
      document.title = "Forget Password | Chill Mountain Trekkers";
    } else {
      document.title = "Chill Mountain Trekkers";
    }
  }, [location.pathname]);

  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      {/*===== RootElement Children will stay here===== */}
      <main className="w-11/12 mx-auto my-8 lg:my-12 ">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
