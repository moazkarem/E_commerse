/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { React, useEffect } from "react";
import "../style/Bestselingstore.css";
import Card from "react-bootstrap/Card";
import { FaTag } from "react-icons/fa";
import imageonly3 from "../assets/imgs/Best Selling/BestSelling(33).png";
import { getsellingBest } from "../store/BestDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
const BestSelingStore = () => {
  const { loading, bestSelling } = useSelector((state) => state.BestDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getsellingBest());
  }, [dispatch]);
  return (
    <div>
      <div className="d-flex justify-content-center mb-3 align-items-center names-best-seling containear">
        <h1>Best Selling Store</h1>
      </div>
      <div className="discount-cont row me-0 justify-content-evenly mb-5">
        {bestSelling.map((discount) => (
          <Card
            key={discount.id}
            style={{ width: "16rem" }}
            className="dis-card col-lg-3 col-md-6 col-sm-12 mb-4 "
          >
            <Card.Img
              className="img-best-selling"
              variant="top"
              src={discount.image}
            />
            <Card.Body
              style={{ backgroundColor: discount.colorBg }}
              className="disc-body"
            >
              <div className="logo">
                <img src={imageonly3} className="title-imge" />
              </div>
              <Card.Text>
                <p
                  style={{
                    color: discount.colorPrice,
                    fontSize: "20px",
                    fontWeight: "400",
                    marginTop: "15px",
                  }}
                >
                  {" "}
                  {discount.title}{" "}
                </p>
                <p style={{ fontSize: "12px", color: "#767676" }}>
                  {" "}
                  {discount.name}
                </p>
                <p style={{ fontSize: "12px", color: "#c34482" }}>
                  {" "}
                  <span className="me-2">
                    {" "}
                    <FaTag />{" "}
                  </span>{" "}
                  {discount.descripe}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default BestSelingStore;
