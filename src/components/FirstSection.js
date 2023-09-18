/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import MainHeader from "./MainHeader";
import BgSection from "./BgSection";
import ShopCategory from "./ShopCategory";
import BestDetails from "./BestDetails";
import Brands from "./Brands";
import Discounts from "./Discounts";
import PopularProduct from "./PopularProduct";
import CashBack from "./CashBack";
import FilterationProducts from "./FilterationProducts";
import SecondCashback from "./SecondCashback";
import MostSeling from "./MostSeling";
import TrendingProduct from "./TrendingProduct";
import BestSelingStore from "./BestSelingStore";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
const FirstSection = () => {
  const { isloggedin } = useSelector((state) => state.productPage);

  return (
    <div>
      <Header />
      <MainHeader />
      <BgSection />
      <ShopCategory />
      <BestDetails />
      <Brands />
      <Discounts />
      <PopularProduct />
      <CashBack />
      <FilterationProducts />
      <SecondCashback />
      <MostSeling />
      <TrendingProduct />
      <BestSelingStore />
      <Footer />
    </div>
  );
};
export default FirstSection;
