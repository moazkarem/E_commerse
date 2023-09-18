import React, {  useState } from "react";
import Useproducthooks from "../../hooks/Use-product-hooks";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/Header";
import MainHeader from "../../components/MainHeader";
import { useEffect } from "react";
import { UpdateProduct } from "../../store/ProductPageSlice";
const EditProduct = () => {
  const [id, setid] = useState("");
  const [Name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [item, setitem] = useState("");
  const [price, setprice] = useState("");
  // eslint-disable-next-line no-unused-vars
  const { loading2, detailsproductAdmin } = Useproducthooks();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (detailsproductAdmin) {
      setid(detailsproductAdmin?.id);
      setname(detailsproductAdmin?.Name);
      setdesc(detailsproductAdmin?.desc);
      setitem(detailsproductAdmin?.item);
      setprice(detailsproductAdmin?.price);
    }
  }, [detailsproductAdmin]);
  const handelEdit = (event) => {
    event.preventDefault();
    dispatch(UpdateProduct({ id, Name, desc, item, price }))
      .unwrap()
      .then(() => {
        navigate("/admin");
      });
  };
  return (
    <div>
      <Header />
      <MainHeader />
      <Container>
        <Row>
          <Form className="mb-5" onSubmit={handelEdit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Id</Form.Label>
              <Form.Control
                type="number"
                placeholder="enter product id "
                value={id}
                onChange={(e) => setid(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter product name"
                value={Name}
                onChange={(e) => setname(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter product qyantity "
                value={item}
                onChange={(e) => setitem(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product describe</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter product describe"
                value={desc}
                onChange={(e) => setdesc(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product price</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter product price"
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
        </Row>
      </Container>
    </div>
  );
};
export default EditProduct;
