import React from "react";
import "./style/index.css";
import FirstSection from "./components/FirstSection";
import Products from "./pages routed/Products";
import Deals from "./pages routed/Deals";
import LogOut from "./pages routed/LogOut";
import Cartshoping from "./pages routed/Cartshoping";
import Delivery from "./pages routed/Delivery";
import ErrorPage from "./pages routed/Erorrpage";
import Profile from "./pages routed/Profile";
import AddProduct from "./Admin/AddProduct/AddProduct";
import EditProduct from "./Admin/EditProduct/EditProduct";
import Admin from "./Admin/Admin";
import DetailsProduct from "./Admin/Details/DetailsProduct";
import Login from "./components/Login";
const App = () => {
  return (
    <div>
      <FirstSection />
      <Products />
      <Deals />
      <LogOut />
      <Admin />
      <Cartshoping />
      <Delivery />
      <ErrorPage />
      <Profile />
      <AddProduct />
      <EditProduct />
      <DetailsProduct />
      <Login />
    </div>
  );
};

export default App;
