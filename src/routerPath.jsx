import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./modules/components/homePage/homePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default function RouterPath() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
