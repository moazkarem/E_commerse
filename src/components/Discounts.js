/* eslint-disable no-unused-vars */
import { React, useEffect } from "react";
import "../style/Discounts.css";
import Card from "react-bootstrap/Card";
import { getdiscount } from "../store/BestDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
const Discounts = () => {
  const { loading, discount } = useSelector((state) => state.BestDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdiscount());
  }, [dispatch]);
  return (
    <div>
      <div className="d-flex justify-content-center mb-3 align-items-start names-discount containear">
        <h1>Get Up To 70% Off</h1>
      </div>
      <div className="discount-cont row me-0 justify-content-evenly mb-5">
        {discount.map((discount) => (
          <Card
            key={discount.id}
            style={{ width: "16rem" }}
            className="dis-card col-lg-3 col-md-6 col-sm-12 mb-4 "
          >
            <Card.Body
              style={{ backgroundColor: discount.colorBg }}
              className="disc-body"
            >
              <Card.Title
                style={{
                  fontSize: "32px",
                  color: "#333333",
                  fontFamily: "cairo",
                }}
              >
                save
              </Card.Title>
              <Card.Text>
                <p
                  style={{
                    color: discount.colorPrice,
                    fontSize: "38px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  <span style={{ fontSize: "15px" }}> $ </span> {discount.price}{" "}
                </p>
                <p style={{ fontSize: "13px", color: "#333333" }}>
                  {" "}
                  {discount.desc}
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={discount.image} />
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Discounts;
