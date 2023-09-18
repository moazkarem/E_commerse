import { useDispatch } from "react-redux";
import { loginAdminUser } from "../store/ProductPageSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import "../style/login.css";
const formschema = Yup.object().shape({
  user: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("user name is required"),
  pass: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("password is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      user: "",
      pass: "",
      email: "",
    },
    validationSchema: formschema,
    onSubmit: (values) => {
      const logedData = {
        user: values.user,
        pass: values.pass,
      };
      dispatch(loginAdminUser(logedData));
      navigate("/");
    },
  });
  return (
    <div>
      <div className="div-form-login d-flex justify-content-center align-items-center">
        <form
          onSubmit={formik.handleSubmit}
          className=" log-form d-flex   flex-column  "
        >
          <h1>Login Here</h1>
          <label>username</label>
          <input
            className=""
            type="text"
            placeholder="enter your  username"
            onChange={formik.handleChange}
            value={formik.values.user}
            name="user"
          />
          {formik.errors.user && formik.touched.user ? (
            <div>{formik.errors.user}</div>
          ) : null}
          <label>Email</label>
          <input
            className=""
            type="text"
            placeholder="enter your  email"
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
          />
          {formik.errors.email && formik.touched.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <label>Password</label>
          <input
            className="mb-2"
            type="password"
            placeholder="enter your password "
            onChange={formik.handleChange}
            value={formik.values.pass}
            name="pass"
          />
          {formik.errors.pass && formik.touched.pass ? (
            <div>{formik.errors.pass}</div>
          ) : null}
          <div className="w-100 d-flex justify-content-center align-items-center">
            <button className="btn-log py-1"> Login </button>
          </div>
          <div class="social">
            <div class="go">
              {" "}
              <span className="fab">
                <AiFillGoogleCircle />{" "}
              </span>{" "}
              Google
            </div>
            <div class="fb">
              <span className="fab">
                <AiFillFacebook />{" "}
              </span>{" "}
              Facebook
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
