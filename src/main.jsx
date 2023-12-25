import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Order from "./components/Order/Order.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Login from "./components/Login/Login.jsx";
import cartProductsLoader from "./loader/cartProductsLoader.js";
import CheckOut from "./components/CheckOut/CheckOut.jsx";
import Signup from "./components/Signup/Signup.jsx";
import AuthProvider from "./components/providers/AuthProvider.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "order",
        element: <Order></Order>,
        loader: cartProductsLoader,
      },
      {
        path: "inventory",
        element: (
          <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
