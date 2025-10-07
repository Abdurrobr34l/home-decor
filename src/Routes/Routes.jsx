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
    hydrateFallbackElement: <p>Loading...</p>, // * Just to remove console error message of hydrateFallback
    children: [
      {
        // path: "/home",
        index: true,
        Component: Home,
        // loader: () => fetch("./furnitureData.json"),
      },
      {
        path: "/products",
        Component: Products,
        // loader: () => fetch("./furnitureData.json"),
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
