/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { React, useEffect } from "react";
import { getCategory } from "../store/BestDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import "../style/Shopcategory.css";
const ShopCategory = () => {
  const { loading, category } = useSelector((state) => state.BestDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <div>
      <div className="d-flex justify-content-center  mb-3 align-items-center names containear">
        <h1>Shop Our Top Categories</h1>
      </div>
      <section className=" row me-0  d-flex justify-content-center align-items-center mb-5">
        {category.map((categ) => (
          <div key={categ.ids} className="img-cat  me-1">
            <h1>{categ.title}</h1>
            <img src={categ.image} />
          </div>
        ))}
      </section>
    </div>
  );
};
export default ShopCategory;
