import { Navigate, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/Main";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "shop", element: <Products /> },
        { path: "cart", element: <Cart /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
