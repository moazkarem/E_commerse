/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Button from "react-bootstrap/Button";
import imge from "../assets/imgs/Card Cash back/CardCashback2.png";
import "../style/secondCash.css";
const SecondCashback = () => {
  return (
    <div>
      <div className="conta-all d-flex justify-content-around align-items-center mb-5">
        <div className="title-div mb-sm-4">
          <h1 className="h1-sec">Get 5% Cash Back</h1>
          <p className="p1-sec">on Shopcart.com</p>
          <Button className="btn-learn btn-sec" variant="primary">
            Learn more
          </Button>{" "}
        </div>
        <div>
          <img src={imge} />
        </div>
      </div>
    </div>
  );
};
export default SecondCashback;
