import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Header from "../../components/Header";
import MainHeader from "../../components/MainHeader";
import Footer from "../../components/Footer";
import { inserProduct } from "../../store/ProductPageSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./add.css";
const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [Image, setimage] = useState("");
  const [item, setitem] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState("");
  const [Name, setName] = useState("");
  const formHandeler = (event) => {
    event.preventDefault();
    const insertData = {
      id,
      Image,
      Name,
      desc,
      item,
      price,
    };
    dispatch(inserProduct(insertData))
      .unwrap()
      .then(() => {
        setId(null);
        setimage(null);
        setitem(null);
        setdesc(null);
        setprice(null);
        setName(null);
        navigate("/admin");
      });
  };
  return (
    <div>
      <Header />
      <MainHeader />
      <Container>
        <row>
          <Form className="form-add p-5 mb-5 mt-3" onSubmit={formHandeler}>
            <h1
              className="text-center w-100 mb-5 mt-5"
              style={{ color: "#fff" }}
            >
              {" "}
              Add new Product ...{" "}
            </h1>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontSize: "25px", color: "#fff" }}>
                Product id{" "}
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="enter product id"
                value={id}
                onChange={(e) => setId(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontSize: "25px", color: "#fff" }}>
                Product name{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="enter product name"
                value={Name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontSize: "25px", color: "#fff" }}>
                Product image{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="enter product image , should be started by https"
                value={Image}
                onChange={(e) => setimage(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontSize: "25px", color: "#fff" }}>
                product quantity{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="enter product quantity that availabeld with you "
                value={item}
                onChange={(e) => setitem(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontSize: "25px", color: "#fff" }}>
                Product describe
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="enter product describe "
                value={desc}
                onChange={(e) => setdesc(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontSize: "25px", color: "#fff" }}>
                Product price
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=" enter Product price"
                value={price}
                onChange={(e) => setprice(e.currentTarget.value)}
              />
            </Form.Group>
            <div className="w-100 d-flex justify-content-center">
              <input
                className="px-3 py-1  text-center "
                style={{
                  backgroundColor: "#6c757d",
                  color: "#fff",
                  border: "none",
                  width: "250px",
                  borderRadius: "20px",
                }}
                type="submit"
              />
            </div>
          </Form>
        </row>
      </Container>
      <Footer />
    </div>
  );
};
export default AddProduct;
