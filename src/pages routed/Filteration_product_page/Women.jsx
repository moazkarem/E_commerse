/* eslint-disable no-unused-vars */
import { React, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import "../Sryle pages routes/Allproduct.css";
import { getwomenproduct } from "../../store/ProductPageSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
const Women = () => {
  const { loading2, womenProduct } = useSelector((state) => state.productPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getwomenproduct());
  }, [dispatch]);
  return (
    <div>
      <div className="card-product ms-5 me-5 row ">
        {womenProduct.map((product) => (
          <Card
            key={product.id}
            className="carde-prod  pt-3 me-1 mb-3 co-lg-3 col-md-4 col-sm-12"
            style={{ width: "16rem" }}
          >
            <span onClick={() => console.log("heart")} className="fav">
              {" "}
              <FaHeart />{" "}
            </span>
            <div className="div-img-prod d-flex justify-content-center align-items-center">
              <Card.Img
                className="img-prod"
                variant="top"
                src={product.Image}
              />
            </div>
            <Card.Body>
              <Card.Title className="name-prod">{product.Name}</Card.Title>
              <Card.Text className="titl-prod">{product.desc}</Card.Text>
              <div className="mb-3">
                <span style={{ color: "#ffb700" }}>
                  {" "}
                  <FaStar />{" "}
                </span>
                <span style={{ color: "#ffb700" }}>
                  {" "}
                  <FaStar />{" "}
                </span>
                <span style={{ color: "#ffb700" }}>
                  {" "}
                  <FaStar />{" "}
                </span>
                <span style={{ color: "#ffb700" }}>
                  {" "}
                  <FaStar />{" "}
                </span>
                <span style={{ color: "#ffb700" }}>
                  {" "}
                  <FaStar />{" "}
                </span>
              </div>
              <div className="inc-decrease d-flex justify-content-between ms-1 me-1 mb-3 align-items-center ">
                <Button variant="primary">+</Button>
                <span
                  style={{ color: "#767676", fontSize: "13px" }}
                  className="item-prod"
                >
                  <span style={{ color: "#ffb700" }}> {product.item} </span>{" "}
                  item
                </span>
                <Button variant="primary">+</Button>
              </div>
              <div className="add-prod-card d-flex justify-content-between align-items-center me-1 ms-1">
                <span
                  style={{ fontSize: "14px", color: "#003d29" }}
                  className="titl-car"
                >
                  {" "}
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "200",
                      color: "#003d29",
                    }}
                  >
                    $
                  </span>{" "}
                  {product.price}{" "}
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "200",
                      color: "#003d29",
                    }}
                  >
                    .00
                  </span>{" "}
                </span>
                <Button className="card-prode-btn p-0" variant="primary">
                  {" "}
                  <span style={{ fontSize: "16px" }}>
                    {" "}
                    <BsFillCartCheckFill />{" "}
                  </span>{" "}
                  Add to card{" "}
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Women;
