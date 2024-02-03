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
import AdminLayout from "./layouts/Admin";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/Products";
import Users from "./pages/admin/Users";
import Categories from "./pages/admin/Categories";
import UserDetails from "./pages/admin/UserDetails";
import ProductDetails from "./pages/admin/ProductDetails";
import CategoryDetails from "./pages/admin/CategoryDetails";
import Register from "./pages/Register";

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
        { path: "register", element: <Register /> },
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
      path: "admin",
      element: <AdminLayout />,
      children: [
        { path: "/admin", element: <Navigate to="/admin/dashboard" replace /> },
        { path: "dashboard", element: <Dashboard /> },
        {
          path: "products",
          children: [
            { index: true, element: <AdminProducts /> },
            { path: ":uid", element: <ProductDetails /> },
          ],
        },
        {
          path: "users",

          children: [
            { index: true, element: <Users /> },
            { path: ":uid", element: <UserDetails /> },
          ],
        },
        {
          path: "categories",
          children: [
            { index: true, element: <Categories /> },
            { path: ":uid", element: <CategoryDetails /> },
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
