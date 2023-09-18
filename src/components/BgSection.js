/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../style/FirsetSection.css";
import Button from "react-bootstrap/Button";
import imageOne from "../assets/imgs/Landing/LandingBG.png";
import imagetwo from "../assets/imgs/Landing/Landing(1).png";
import imagethree from "../assets/imgs/Landing/Landing(2).png";
import imagfour from "../assets/imgs/Landing/Landing(3).png";
const BgSection = () => {
  return (
    <div>
      <section className="main-sec">
        <div className="titles ms-5 d-flex justify-content-center align-content-between flex-column ">
          <h1 className="t-1">
            Shopping And <br /> Department Store.{" "}
          </h1>
          <h3 className="t-2">
            Shopping is a bit of a relaxing hobby for me, which is sometimes{" "}
            <br />
            troubling for the bank balance
          </h3>
          <Button className="btn-more" variant="primary">
            Learn More
          </Button>{" "}
        </div>
        <img src={imageOne} className="yello-img" />
        <img src={imagfour} className="bag-imf" />
        <img src={imagethree} className="travel-bag" />
        <img src={imagetwo} className="elec-img" />
      </section>
    </div>
  );
};
export default BgSection;
