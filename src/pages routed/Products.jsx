/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header.js";
import "./Sryle pages routes/productPage.css";

import MainHeader from "../components/MainHeader.js";
import Footer from "../components/Footer.js";
import Button from "react-bootstrap/Button";
import bg from "../assets/imgs/bacgroundProudacts.png";
import AllProduct from "./Filteration_product_page/AllProduct";
import Electronic from "./Filteration_product_page/Electronic.jsx";
import Jewerly from "./Filteration_product_page/Jewerly.jsx";
import MensProduct from "./Filteration_product_page/MensProduct.jsx";
import Women from "./Filteration_product_page/Women.jsx";
import { filterSending } from "../store/ProductPageSlice.js";
const Products = ({ m }) => {
  const { loading2, sendFilter, statusSendFilter } = useSelector(
    (state) => state.productPage
  );
  const dispatch = useDispatch();

  const showfilter = () => {
    if (sendFilter === "all") {
      return <AllProduct />;
    }
    if (sendFilter === "electronic") {
      return <Electronic />;
    }
    if (sendFilter === "jewelery") {
      return <Jewerly />;
    }
    if (sendFilter === "Men") {
      return <MensProduct />;
    }
    if (sendFilter === "women") {
      return <Women />;
    }
  };
  return (
    <div>
      <Header />
      <MainHeader />
      <div className="first-sec-product row me-0 justify-content-around align-items-center pe-lg-5 ps-lg-5">
        <div className="titles-product-page col-lg-5 col-md-4    ">
          <h1>Grab Upto 50% Off On Selected HeadPhone</h1>
          <Button className="btn-shop" variant="">
            Primary
          </Button>{" "}
        </div>
        <div className="div-img col-lg-5 col-md-5  ">
          <img src={bg} className="img-bg" />
        </div>
      </div>
      /{" "}
      <div className="btn-controll-product-page">
        <div className="btns mb-5 d-flex justify-content-center pt-5 pb-5 ">
          <div className="btn-filter d-flex justify-content-center align-items-center flex-wrap">
            <Button
              className="mb-2"
              variant="outline-light"
              onClick={() => dispatch(filterSending("all"))}
            >
              All
            </Button>
            <Button
              variant="outline-light"
              onClick={() => dispatch(filterSending("electronic"))}
            >
              Electronics
            </Button>
            <Button
              variant="outline-light"
              onClick={() => dispatch(filterSending("jewelery"))}
            >
              jewelery
            </Button>
            <Button
              variant="outline-light"
              onClick={() => dispatch(filterSending("Men"))}
            >
              Men's clothing
            </Button>
            <Button
              variant="outline-light"
              onClick={() => dispatch(filterSending("women"))}
            >
              Women's clothing
            </Button>
          </div>
        </div>
      </div>
      {statusSendFilter === true ? <AllProduct /> : showfilter()}
      <Footer />
    </div>
  );
};
export default Products;
