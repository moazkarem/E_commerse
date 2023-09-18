/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Useproducthooks from "../../hooks/Use-product-hooks";
import { useNavigate } from "react-router-dom";
import "./details.css";
import Header from "../../components/Header";
import MainHeader from "../../components/MainHeader";
import Footer from "../../components/Footer";
import Button from "react-bootstrap/Button";
import imgpro from "../../assets/imgs/bacgroundProudacts.png";
const DetailsProduct = () => {
  const { loading2, detailsproductAdmin } = Useproducthooks();
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <MainHeader />
      <div className="first-sec-product mb-5 row me-0 justify-content-around align-items-center pe-lg-5 ps-lg-5">
        <div className="titles-product-page col-lg-5 col-md-4    ">
          <h1> Details Products </h1>
          <Button
            className="btn-shop"
            variant=""
            onClick={() => navigate("/admin")}
          >
            Go Admin
          </Button>{" "}
        </div>
        <div className="div-img col-lg-5 col-md-5  ">
          <img src={imgpro} className="img-bg" />
        </div>
      </div>
      <h1
        className="w-100 text-center"
        style={{ fontSize: "28px", fontWeight: "700" }}
      >
        {" "}
        More Details About This product{" "}
      </h1>
      <div className="contain-details-product d-flex justify-content-around align-items-center">
        <div className=" cont-img-details">
          <img src={detailsproductAdmin.Image} className="img-details-prod" />
        </div>
        <div className="titels-product-admin p-3">
          <p>
            {" "}
            <span>Product id :</span> {detailsproductAdmin.id}
          </p>
          <p>
            {" "}
            <span>Product Name :</span> {detailsproductAdmin.Name}
          </p>
          <p>
            {" "}
            <span>Product Describtion :</span> {detailsproductAdmin.desc}
          </p>
          <p>
            {" "}
            <span>Product Price :</span> {detailsproductAdmin.price}
          </p>
          <p>
            {" "}
            <span>Product qyantity :</span> {detailsproductAdmin.item}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default DetailsProduct;
