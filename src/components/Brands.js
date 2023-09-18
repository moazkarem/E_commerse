/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import image1 from "../assets/imgs/Brand/Brand(1).png";
import imag2 from "../assets/imgs/Brand/Brand(2).png";
import imag3 from "../assets/imgs/Brand/Brand(3).png";
import imag4 from "../assets/imgs/Brand/Brand(4).png";
import image5 from "../assets/imgs/Brand/Brand(5).png";
import image6 from "../assets/imgs/Brand/Brand(6).png";
import image7 from "../assets/imgs/Brand/Brand(7).png";
import image8 from "../assets/imgs/Brand/Brand(8).png";
import "../style/brands.css";
const Brands = () => {
  const DataBrands = [
    {
      id: 1,
      image: image1,
      title: "Target",
      desc: "Delivery with in 24 hours",
    },
    {
      id: 2,
      image: imag2,
      title: "Grocery outlet",
      desc: "Delivery with in 24 hours",
    },
    { id: 3, image: imag3, title: "Bevmo!", desc: "Delivery with in 24 hours" },
    {
      id: 4,
      image: imag4,
      title: "Sprouts",
      desc: "Delivery with in 24 hours",
    },
    {
      id: 5,
      image: image5,
      title: "Mollie stones",
      desc: "Delivery with in 24 hours",
    },
    {
      id: 6,
      image: image6,
      title: "Container Store",
      desc: "Delivery with in 24 hours",
    },
    {
      id: 7,
      image: image7,
      title: "Staples",
      desc: "Delivery with in 24 hours",
    },
    {
      id: 8,
      image: image8,
      title: "Sports Basement",
      desc: "Delivery with in 24 hours",
    },
    {
      id: 2,
      image: imag2,
      title: "Grocery outlet",
      desc: "Delivery with in 24 hours",
    },
  ];
  return (
    <div>
      <div className="brands mb-5">
        <div className="d-flex justify-content-center mb-3 align-items-start names-brand containear">
          <h1>Choose By Brand</h1>
        </div>
        <div className="all row me-0 justify-content-evenly ">
          {DataBrands.map((brand) => (
            <div
              key={brand.id}
              className="cont-brand d-flex justify-content-evenly align-items-center  col-lg-4 col-md-6 col-sm-12 mb-3 "
            >
              <div className="omg-brand">
                <img src={brand.image} />
              </div>
              <div className="brand-titles">
                <h1>{brand.title}</h1>
                <p>{brand.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Brands;
