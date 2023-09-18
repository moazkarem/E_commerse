import React from "react";
import imagone from "../../assets/imgs/TodaysBestDeals/TodaysBestDeals(2).png";
import imagtwo from "../../assets/imgs/TodaysBestDeals/TodaysBestDeals(3).png";
import imag3 from "../../assets/imgs/TodaysBestDeals/TodaysBestDeals(6).png";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
const Electronic = () => {
  const coverData = [
    {
      id: 1,
      image: imagone,
      name: "Laptop sleeve MacBook",
      price: 239,
      descripe: "Table with air purifier, stained veneer/black",
      type: "cover",
    },
    {
      id: 2,
      image: imagtwo,
      name: "Laptop sleeve MacBook",
      price: 975,
      descripe: "Table with air purifier, stained veneer/black",
      type: "cover",
    },
    {
      id: 3,
      image: imag3,
      name: "Laptop sleeve MacBook",
      price: 234,
      descripe: "Table with air purifier, stained veneer/black",
      type: "cover",
    },
  ];
  return (
    <div>
      <div className=" d-flex mb-5 row me-0 justify-content-around align-items-center">
        {coverData.map((product) => (
          <Card
            key={product.id}
            className="carde card-fil  col-lg-4 col-md-6 col-sm-12 mb-4 "
            style={{ width: "16rem" }}
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
export default Electronic;
