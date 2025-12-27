import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Toaster></Toaster>
      <RouterProvider router={PublicRoutes}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
