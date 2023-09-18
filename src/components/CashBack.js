import React from "react";
import "../style/getCash.css";
import Button from "react-bootstrap/Button";
const CashBack = () => {
  return (
    <div className="cont-cash">
      <div className="getcash pe-lg-5 mb-5">
        <div className="title-cash d-flex flex-column justify-content-center align-items-center">
          <h1>
            Get 5% Cash
            <br />
            Back On $200
          </h1>
          <p>
            Shopping is a bit of a relaxing hobby for me,
            <br />
            which is sometimes troubling for the bank
            <br />
            balance.
          </p>
          <Button className="btn-learn" variant="outline-light">
            Learn more
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};
export default CashBack;
