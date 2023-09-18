/* eslint-disable jsx-a11y/alt-text */
import { useDispatch, useSelector } from "react-redux";
import Header from ".././components/Header";
import MainHeader from ".././components/MainHeader";
import "./Sryle pages routes/Cartshop.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import "./Sryle pages routes/Allproduct.css";
import { FaHeart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { decrease, increase } from "../store/ProductPageSlice";
import { deletefromCard } from "../store/ProductPageSlice";
import { clear } from "../store/ProductPageSlice";
import Footer from "../components/Footer";
import image from ".././assets/imgs/carte.png";
const Cartshoping = () => {
  // eslint-disable-next-line no-unused-vars
  const { loading2, AddtoCard } = useSelector((state) => state.productPage);
  const totalPrice = AddtoCard.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <MainHeader />

      {AddtoCard.length === 0 ? (
        <div className="w-100 d-flex justify-content-center align-items-center flex-column">
          {" "}
          <img className=" mb-2 cart-empty" src={image} />
          <h1 style={{ color: "#767676", fontSize: "18px" }}>
            there is no items in cart
          </h1>
        </div>
      ) : (
        <div className="card-product ms-5 me-5 row ">
          {AddtoCard.map((product) => (
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
                  <span style={{ color: "#ffb700" }} className="me-4">
                    {" "}
                    <FaStar />{" "}
                  </span>
                  <span style={{ color: "#003d29" }}>
                    {" "}
                    quantity : {product.quantity}{" "}
                  </span>
                </div>
                <div className="inc-decrease d-flex justify-content-between ms-1 me-1 mb-3 align-items-center ">
                  <Button
                    variant="primary"
                    onClick={() => dispatch(increase(product))}
                  >
                    +
                  </Button>
                  <span
                    style={{ color: "#767676", fontSize: "13px" }}
                    className="item-prod"
                  >
                    <span style={{ color: "#ffb700" }}> {product.item} </span>{" "}
                    item
                  </span>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(decrease(product))}
                  >
                    -
                  </Button>
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
                  <Button
                    onClick={() => dispatch(deletefromCard(product))}
                    className="card-prode-btn p-0"
                    variant="primary"
                  >
                    {" "}
                    <span style={{ fontSize: "16px" }}>
                      {" "}
                      <FaTrash />{" "}
                    </span>{" "}
                    Delete item{" "}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
      <div className="d-flex justify-content-around mb-5">
        <Button
          className="review mt-2 mb-2 "
          style={{ backgroundColor: "red", color: "#fff", border: "none" }}
          variant="success"
          onClick={() => dispatch(clear())}
          disabled={AddtoCard.length === 0 ? true : false}
        >
          clear
        </Button>
        <Button className="review mt-2 mb-2 " variant="success">
          Total price : {totalPrice} ${" "}
        </Button>
      </div>
      <Footer />
    </div>
  );
};
export default Cartshoping;
