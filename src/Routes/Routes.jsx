import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
    ],
  },

  //* Error Page
  { path: "*", Component: ErrorPage },
]);
