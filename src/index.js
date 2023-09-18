/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import FirstSection from "./components/FirstSection";
import Products from "./pages routed/Products";
import Deals from "./pages routed/Deals";
import Delivery from "./pages routed/Delivery";
import LogOut from "./pages routed/LogOut";
import Cartshoping from "./pages routed/Cartshoping";
import Profile from "./pages routed/Profile";
import ErrorPage from "./pages routed/Erorrpage";
import Admin from "./Admin/Admin";
import AddProduct from "./Admin/AddProduct/AddProduct";
import EditProduct from "./Admin/EditProduct/EditProduct";
import DetailsProduct from "./Admin/Details/DetailsProduct";
import Login from "./components/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstSection />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/deals",
    element: <Deals />,
  },
  {
    path: "/delivery",
    element: <Delivery />,
  },
  {
    path: "/logout",
    element: <LogOut />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/cartshoping",
    element: <Cartshoping />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/add",
    element: <AddProduct />,
  },
  {
    path: "/details/:id",
    element: <DetailsProduct />,
  },
  {
    path: "/:id/edit",
    element: <EditProduct />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
