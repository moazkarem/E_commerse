/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import { useSelector, useDispatch } from "react-redux";
import "./Sryle pages routes/Deals.css";
import Header from "../components/Header.js";
import "./Sryle pages routes/productPage.css";
import Button from "react-bootstrap/Button";
import bg from "../assets/imgs/bacgroundProudacts.png";
import MainHeader from "../components/MainHeader.js";
import Footer from "../components/Footer";
import "./Sryle pages routes/Allproduct.css";
import image from ".././assets/imgs/carte.png";
import { removeFromFavorite } from "../store/ProductPageSlice";
import { resetFav } from "../store/ProductPageSlice";
const Deals = () => {
  const dispatch = useDispatch();
  const { loading2, AddToFav, statusFav } = useSelector(
    (state) => state.productPage
  );
  return (
    <div>
      <Header />
      <MainHeader />
      <div className="first-sec-product mb-5 row me-0 justify-content-around align-items-center pe-lg-5 ps-lg-5">
        <div className="titles-product-page col-lg-5 col-md-4    ">
          <h1>Your Favourit Product </h1>
          <Button className="btn-shop" variant="">
            Buy Now
          </Button>{" "}
        </div>
        <div className="div-img col-lg-5 col-md-5  ">
          <img src={bg} className="img-bg" />
        </div>
      </div>
      <Container>
        <row>
          {statusFav === true ? (
            <div className="w-100 d-flex justify-content-center align-items-center flex-column">
              {" "}
              <img className=" mb-2 cart-empty" src={image} />
              <h1 style={{ color: "#767676", fontSize: "18px" }}>
                there is no items in Your Favourit{" "}
              </h1>
            </div>
          ) : (
            <Table striped className="mb-5">
              <thead>
                <tr className="text-head">
                  <th className="">#</th>
                  <th>img</th>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Control</th>
                </tr>
              </thead>
              <tbody>
                {AddToFav.map((product) => (
                  <tr className="control-fav" key={product.id}>
                    <td>{product.id}</td>
                    <td className="imge">
                      <img src={product.Image} />
                    </td>
                    <td>{product.Name}</td>
                    <td>{product.desc}</td>
                    <td>{product.price}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => dispatch(removeFromFavorite(product))}
                      >
                        {" "}
                        Delete{" "}
                      </Button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          <Button
            className="review mt-2 mb-2 "
            style={{ backgroundColor: "red", color: "#fff", border: "none" }}
            variant="success"
            onClick={() => dispatch(resetFav())}
            disabled={AddToFav.length === 0 ? true : false}
          >
            clear
          </Button>
        </row>
      </Container>
      <Footer />
    </div>
  );
};
export default Deals;
