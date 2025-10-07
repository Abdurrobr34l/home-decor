import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Products from "../Pages/Products";

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/products", Component: Products },
  {path: "*", Component: ErrorPage},
]);
