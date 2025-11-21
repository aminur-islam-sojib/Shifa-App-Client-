import AuthLayOut from "@/components/Layout/AuthLayOut";
import RootLayout from "@/components/Layout/RootLayout";
import { LogIn } from "@/Pages/Auth/LogIn";
import { Register } from "@/Pages/Auth/Register";
import Home from "@/Pages/Home/Home";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayOut,
    children: [
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
