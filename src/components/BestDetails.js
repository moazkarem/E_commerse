/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "../style/bestDetails.css";
import { getBestDetails } from "../store/BestDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const BestDetails = () => {
  const { loading, bestDetails } = useSelector((state) => state.BestDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBestDetails());
  }, [dispatch]);

  return (
    <div className="best pt-4 mb-5">
      <div className="d-flex justify-content-center mb-3 align-items-center names-details containear">
        <h1>Todays Best Deals For You!</h1>
      </div>
      <div className="continer-cards  row me-0 justify-content-evenly ms-5 me-5  ">
        {bestDetails.map((product) => (
          <Card
            key={product.id}
            className="carde col-lg-4 col-md-6 col-sm-12 mb-2 "
            style={{ width: "18rem" }}
          >
            <span onClick={() => console.log("heart")} className="fav">
              {" "}
              <FaHeart />{" "}
            </span>
            <Card.Img className="car-img" variant="top" src={product.image} />
            <Card.Body>
              <Card.Title className="d-flex justify-content-between">
                <span style={{ fontSize: "14px" }} className="titl-car">
                  {" "}
                  {product.name}{" "}
                </span>
                <span style={{ fontSize: "14px" }} className="titl-car">
                  {" "}
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "200",
                      color: "#000",
                    }}
                  >
                    $
                  </span>{" "}
                  {product.price}{" "}
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "200",
                      color: "#000",
                    }}
                  >
                    .00
                  </span>{" "}
                </span>
              </Card.Title>
              <Card.Text>
                <p className="desc">{product.descripe}</p>
                <div>
                  <span style={{ color: "#47c20a" }}>
                    {" "}
                    <FaStar />{" "}
                  </span>
                  <span style={{ color: "#47c20a" }}>
                    {" "}
                    <FaStar />{" "}
                  </span>
                  <span style={{ color: "#47c20a" }}>
                    {" "}
                    <FaStar />{" "}
                  </span>
                  <span style={{ color: "#47c20a" }}>
                    {" "}
                    <FaStar />{" "}
                  </span>
                  <span style={{ color: "#47c20a" }}>
                    {" "}
                    <FaStar />{" "}
                  </span>
                </div>
              </Card.Text>
              <Button className="btn-card">Add to card</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default BestDetails;
