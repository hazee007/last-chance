import { Navigate, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/Main";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Profile from "./pages/profile";
import Settings from "./pages/profile/Settings";
import WishList from "./pages/profile/WishList";
import Items from "./pages/profile/Items";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Navigate to="/home" replace /> },
        { path: "home", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "shop", element: <Products /> },
        { path: "cart", element: <Cart /> },
        {
          path: "profile",
          element: <Profile />,
          children: [
            {
              path: "/profile",
              element: <Navigate to="/profile/setting" replace />,
            },
            { path: "setting", element: <Settings /> },
            { path: "wishlist", element: <WishList /> },
            { path: "items", element: <Items /> },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
