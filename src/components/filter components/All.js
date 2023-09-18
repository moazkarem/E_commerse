import { React, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "../../style/Filteration.css";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "../../style/Filteration.css";
import { getfilteration } from "../../store/BestDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
const All = () => {
  // eslint-disable-next-line no-unused-vars
  const { loading, filteration, filtername } = useSelector(
    (state) => state.BestDetail
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getfilteration());
  }, [dispatch]);
  return (
    <div>
      <div className="continer-cards row me-0 justify-content-evenly mb-5  ms-5 me-5 ">
        {filteration.map((product) => (
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
export default All;
