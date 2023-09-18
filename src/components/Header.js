import "../style/smallheader.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="all-content p-1 align-items-center d-flex justify-content-around  ">
        <div className="phone ">
          <span className="me-1">
            {" "}
            <BsFillTelephoneFill />{" "}
          </span>
          <span className="ms-1">01095652781</span>
        </div>
        <div className="get-item">
          <span> Get 50% Off on Selected Items | </span>
          <span> Shop Now </span>
        </div>
        <div>
          <div>
            <span
              className="me-2 "
              style={{ cursor: "pointer", fontSize: "14px" }}
            >
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <span
                  className=""
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  login
                </span>
              </NavLink>
            </span>
            <span
              className="me-2 "
              style={{ cursor: "pointer", fontSize: "14px" }}
            >
              register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
