import RootLayout from "@/components/Layout/RootLayout";
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
]);
