import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Privacy from "../pages/Privacy";
import CardDetails from "../components/CardDetails";
import UpdateProfile from "../pages/UpdateProfile";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch("/adventuresData.json");
          const data = await res.json();

          const res2 = await fetch("/reviewsData.json");
          const data2 = await res2.json();
          return { data, data2 };
        },
      },
      {
        path: "/cardDetails/:id",
        element: <CardDetails></CardDetails>,
        loader: async ({ params }) => {
          const res = await fetch("/adventuresData.json");
          const data = await res.json();
          const singleData = data.find((item) => item.id == params.id);
          return singleData;
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
    ],
  },
]);

export default PublicRoutes;
