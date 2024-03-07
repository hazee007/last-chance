import { Navigate, useRoutes } from "react-router-dom";

import AdminLayout from "./layouts/Admin";
import MainLayout from "./layouts/Main";
import Categories from "./pages/admin/Categories";
import CategoryDetails from "./pages/admin/CategoryDetails";
import Dashboard from "./pages/admin/Dashboard";
import ProductDetails from "./pages/admin/ProductDetails";
import AdminProducts from "./pages/admin/Products";
import UserDetails from "./pages/admin/UserDetails";
import Users from "./pages/admin/Users";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ItemDetail from "./pages/Item";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Profile from "./pages/profile";
import Items from "./pages/profile/Items";
import Settings from "./pages/profile/Settings";
import WishList from "./pages/profile/WishList";
import Register from "./pages/Register";
import Products from "./pages/Shop";

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
        { path: "shop/:category", element: <Product /> },
        { path: "shop/:category/:item", element: <ItemDetail /> },
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
