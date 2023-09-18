/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../style/trendingproduct.css";
import Button from "react-bootstrap/Button";
import imageone from "../assets/imgs/Trending Products/card1.png";
import imagetwo from "../assets/imgs/Trending Products/card2.png";
const TrendingProduct = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mb-3 align-items-center names-trending containear">
        <h1>Trending Products For You!</h1>
      </div>
      <div className="all-first mb-5 d-flex justify-content-evenly align-items-center flex-wrap">
        <div className="containse mb-3 ">
          <div className="first">
            <img src={imagetwo} />
          </div>
          <div className="contains  ps-4 pt-4 pb-4">
            <h1>Furniture Village</h1>
            <p>Delivery with in 24 hours</p>
            <Button className="btn-learn btn-sec" variant="primary">
              Shop Now
            </Button>{" "}
          </div>
        </div>
        <div className="containse  mb-3">
          <div className="first">
            <img src={imageone} />
          </div>
          <div className="contains ps-4 pt-4 pb-4">
            <h1>Furniture Village</h1>
            <p>Delivery with in 24 hours</p>
            <Button className="btn-learn btn-sec" variant="primary">
              Shop Now
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrendingProduct;
