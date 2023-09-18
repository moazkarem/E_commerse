/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Admin.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlinePicLeft } from "react-icons/ai";
import { AiOutlineTable } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import moaz from "../assets/imgs/moaz.jpg";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductPage } from "../store/ProductPageSlice";
import { deleteProduct } from "../store/ProductPageSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hahdelDelete = (item) => {
    Swal.fire({
      icon: "error",
      title: `${item.Name} will be deleted`,
      showCancelButton: true,
    }).then((e) => {
      if (e.isConfirmed) {
        dispatch(deleteProduct(item));
      }
    });
  };
  const { loading2, productPagearray, superAdmin } = useSelector(
    (state) => state.productPage
  );
  console.log(superAdmin);
  useEffect(() => {
    dispatch(getProductPage());
  }, [dispatch]);
  return (
    <div>
      <div className="all-admin-contint">
        <section className="d-flex flex-column p-2 side-bar">
          <div className="mb-4 d-flex justify-content-between w-100 align-items-center">
            <span>
              {" "}
              <img src={moaz} className="moaz-img" />{" "}
            </span>
            <span className="name-me"> Moaz Karem </span>
          </div>
          <div className="mb-5 d-flex justify-content-start entery-div w-100 align-items-center ps-3">
            <span className="me-5 icone">
              {" "}
              <AiOutlineHome />{" "}
            </span>
            <span> Dashbord </span>
          </div>
          <div className="mb-5 d-flex justify-content-start entery-div w-100 align-items-center ps-3">
            <span className="me-5 icone">
              {" "}
              <AiOutlineUser />{" "}
            </span>
            <span> Clients </span>
          </div>
          <div className="mb-5 d-flex justify-content-start entery-div w-100 align-items-center ps-3">
            <span className="me-5 icone">
              {" "}
              <AiOutlineEdit />{" "}
            </span>
            <span onClick={() => navigate("/products")}> Products </span>
          </div>
          <div className="mb-5 d-flex justify-content-start entery-div w-100 align-items-center ps-3">
            <span className="me-5 icone">
              {" "}
              <AiFillStar />{" "}
            </span>
            <span> Favorit </span>
          </div>
          <div className="mb-5 d-flex justify-content-start entery-div w-100 align-items-center ps-3">
            <span className="me-5 icone">
              {" "}
              <AiFillSetting />{" "}
            </span>
            <span> Setting </span>
          </div>
          <div className="mb-4 ps-3">
            <span>
              {" "}
              <Button
                className="log-out p-0"
                variant="success"
                onClick={() => navigate("/login")}
              >
                {" "}
                Log out{" "}
              </Button>{" "}
            </span>
          </div>
        </section>
        <div className="content-dash p-3 ">
          <div className="first-sec-dash d-flex w-100 justify-content-between px-3 py-1 mb-2">
            <span>dashbord</span>
            <span>
              {" "}
              <AiOutlinePicLeft />{" "}
            </span>
          </div>
          <div className="second-sec-dash d-flex justify-content-around align-items-center mb-2 ">
            <div className="item d-flex justify-content-around align-items-center">
              <span style={{ fontSize: "60px" }}>
                {" "}
                <AiOutlineUser />{" "}
              </span>
              <span className="text-center">
                <p> client </p>
                <p> 100 </p>
              </span>
            </div>
            <div className="item d-flex justify-content-around align-items-center">
              <span style={{ fontSize: "60px" }}>
                {" "}
                <AiOutlineEdit />{" "}
              </span>
              <span className="text-center">
                <p> Products </p>
                <p> 100 </p>
              </span>
            </div>
            <div className="item d-flex justify-content-around align-items-center">
              <span style={{ fontSize: "60px" }}>
                {" "}
                <AiFillStar />{" "}
              </span>
              <span className="text-center">
                <p> Favourit </p>
                <p> 100 </p>
              </span>
            </div>
            <div className="item d-flex justify-content-around align-items-center">
              <span style={{ fontSize: "60px" }}>
                {" "}
                <AiOutlineUser />{" "}
              </span>
              <span className="text-center">
                <p> Revenue </p>
                <p> 100 </p>
              </span>
            </div>
          </div>
          <button
            disabled={!superAdmin}
            style={{ border: "none", outline: "none" }}
            onClick={() => navigate("/add")}
            className="first-sec-dash d-flex w-100 justify-content-between px-3 py-1 mb-2"
          >
            <span>Add New Product </span>
            <span>
              {" "}
              <AiOutlineTable />{" "}
            </span>
          </button>
          <div className="tables">
            <Table striped className="">
              <thead className="mb-2">
                <tr className=" ">
                  <th className=" "># id</th>
                  <th>img</th>
                  <th>Name</th>
                  <th>Item</th>
                  <th>discribe</th>
                  <th>Price</th>
                  <th>Control</th>
                </tr>
              </thead>
              <tbody>
                {productPagearray.map((product) => (
                  <tr key={product.id} className="control-fav">
                    <td className="">{product.id}</td>
                    <td className="">
                      {" "}
                      <img
                        className="img-prod-admin"
                        src={product.Image}
                      />{" "}
                    </td>
                    <td> {product.Name} </td>
                    <td>{product.item} </td>
                    <td> {product.desc} </td>
                    <td> {product.price} </td>
                    <td>
                      <Button
                        variant="danger"
                        disabled={!superAdmin}
                        onClick={() => hahdelDelete(product)}
                      >
                        {" "}
                        Delete{" "}
                      </Button>{" "}
                      <Button
                        variant="success"
                        disabled={!superAdmin}
                        onClick={() => navigate(`/${product.id}/edit`)}
                      >
                        {" "}
                        Edit{" "}
                      </Button>{" "}
                      <Button
                        variant="warning"
                        disabled={!superAdmin}
                        onClick={() => navigate(`/details/${product.id}`)}
                      >
                        {" "}
                        View{" "}
                      </Button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
