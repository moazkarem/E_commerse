/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import img1 from "../assets/imgs/Footer/footer(1).png";
import img2 from "../assets/imgs/Footer/footer(2).png";
import img3 from "../assets/imgs/Footer/footer(3).png";
import img4 from "../assets/imgs/Footer/footer(4).png";
import img5 from "../assets/imgs/Footer/footer(5).png";
import img6 from "../assets/imgs/Footer/footer(6).png";
import img7 from "../assets/imgs/Footer/footer(7).png";
import img8 from "../assets/imgs/Footer/footer(8).png";
import "../style/Footer.css";
const Footer = () => {
  return (
    <div>
      <hr className="mb-5" style={{ width: "80%", marginLeft: "10%" }}></hr>
      <div className="cont-footer row me-0  justify-content-around ms-3 me-3 align-items-center">
        <div className="shopcart mb-4 col-lg-3 colmd-6 col-sm-12 ">
          <div className="logo-contint">
            <h1 className="name-project">
              {" "}
              <span>
                {" "}
                <BsFillCartCheckFill />{" "}
              </span>{" "}
              shopcart
            </h1>
          </div>
          <div className="acceptpay d-flex flex-column justify-content-center align-items-start">
            <p className="p-foot" style={{ color: "#000", fontSize: "11px" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <h3 className="name-project">Accepted Payments </h3>
            <div className="img_pay  d-flex justify-content-start align-items-center flex-wrap">
              <img src={img1} className="me-3 mb-2 p-2 img-pay" />
              <img src={img2} className="me-3 mb-2 p-2 img-pay" />
              <img src={img3} className="me-3 mb-2 p-2 img-pay" />
              <img src={img4} className="me-3 mb-2 p-2 img-pay" />
              <img src={img5} className="me-3 p-2 mb-2 img-pay" />
              <img src={img6} className="me-3 p-2 mb-2 img-pay" />
              <img src={img7} className="me-3 p-2 mb-2 img-pay" />
              <img src={img8} className="me-3 p-2 mb-2 img-pay" />
            </div>
          </div>
        </div>
        <div className="department mb-4 col-lg-3 col-md-6 col-sm-12 ">
          <h1 className="name-project">Department</h1>
          <ul>
            <li>Fashion</li>
            <li>Education product</li>
            <li>frozen food</li>
            <li>Beverages</li>
            <li>organic grocery </li>
            <li>Books </li>
            <li>electronic & gadget </li>
            <li>fitness </li>
            <li> sneakrs</li>
            <li className="mb-1 mt-1 helpe" style={{ fontWeight: "bold" }}>
              Help
            </li>
            <li> shopcart help </li>
            <li> returns </li>
            <li> contact us </li>
          </ul>
        </div>
        <div className="mb-4 aboutUs col-lg-3 col-md-5 col-sm-12">
          <h1 className="name-project colmd-6 col-sm-12">About Us</h1>
          <ul>
            <li>about shopcart</li>
            <li>careers</li>
            <li>news & blogs </li>
            <li>Help</li>
            <li>press center </li>
            <li>shop by location </li>
            <li> shopcart brands </li>
            <li>ideas & partners </li>
            <li> spartners </li>
            <li className="mb-1 mt-1 helpe" style={{ fontWeight: "bold" }}>
              services
            </li>
            <li> gift card </li>
            <li> mobile app </li>
            <li> account sign up </li>
          </ul>
        </div>
      </div>
      <hr className="mb-3" style={{ width: "80%", marginLeft: "10%" }}></hr>
      <div className="endfoot mb-3 d-flex justify-content-lg-around align-items-center">
        <h4> Terms of Service Privacy & Policy </h4>
        <h4>
          {" "}
          All Right reserved by{" "}
          <span style={{ color: "#003d29" }}>Moaz Karem </span> | 2023{" "}
        </h4>
      </div>
    </div>
  );
};
export default Footer;
