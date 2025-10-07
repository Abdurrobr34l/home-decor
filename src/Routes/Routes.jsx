import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,    // * Error Page
    children: [
      {
        // path: "/home",
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/wishlist",
        Component: WishList,
      },
    ],
  },

  // * Error Page
  // { path: "*", Component: ErrorPage },
]);
