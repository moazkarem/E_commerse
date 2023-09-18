/* eslint-disable no-unused-vars */
import React from "react";
import "../style/mainheader.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";

const MainHeader = () => {
  const { loading2, AddtoCard, AddToFav, isloggedin } = useSelector(
    (state) => state.productPage
  );
  return (
    <div>
      <Navbar expand="lg" className=" contente">
        <Container>
          <Navbar.Brand className="brans-name" href="#">
            <to c="me-1">
              <BsFillCartCheckFill />
            </to>
            <NavLink className="ms-1 brande-name " to="/">
              Shopcart
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                className="categ"
                title="Category"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className="link-pages me-3 mt-2" to="/deals">
                fav{" "}
                <Badge className="badge" bg="">
                  {AddToFav.length}
                </Badge>
              </NavLink>
              <NavLink className="link-pages me-2 mt-2" to="/products">
                Product
              </NavLink>

              <NavLink className="link-pages me-2 mt-2" to="/logout">
                Logout
              </NavLink>
              <NavLink className="link-pages me-2 mt-2" to="/admin">
                <span
                  className={isloggedin === true ? "showadmin" : "hideadmin"}
                >
                  {" "}
                  Admin{" "}
                </span>
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <input
                type="text"
                placeholder="search product"
                className="search-inp me-4 	.d-sm-none .d-md-block .d-lg-block "
              />
            </Form>
            <div>
              <span className="me-1" style={{ color: "#aaa" }}>
                <BsPersonFill />
              </span>
              <NavLink className="me-1 nav-linke" to="/profile">
                Account
              </NavLink>
            </div>
            <div>
              <span className="me-1 " style={{ color: "#aaa" }}></span>
              <NavLink className="me-1 nav-linke" to="/cartshoping">
                <Button className="cart-btn" variant="primary">
                  <BsFillCartCheckFill />{" "}
                  <Badge className="badge" bg="">
                    {AddtoCard.length}
                  </Badge>
                  <span className="visually-hidden">unread messages</span>
                </Button>
              </NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default MainHeader;
