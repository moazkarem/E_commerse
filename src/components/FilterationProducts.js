/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import "../style/Filteration.css";
import { filteraction } from "../store/BestDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import All from "./filter components/All";
import Cover from "./filter components/Cover";
import Electronic from "./filter components/Electronic";
import Plastic from "./filter components/Plastic";
const FilterationProducts = () => {
  const { loading, statusFilter, activeClass, filtername } = useSelector(
    (state) => state.BestDetail
  );
  const dispatch = useDispatch();
  const showfilter = () => {
    if (filtername === "all") {
      return <All />;
    }
    if (filtername === "cover") {
      return <Cover />;
    }
    if (filtername === "electronics") {
      return <Electronic />;
    }
    if (filtername === "plastic") {
      return <Plastic />;
    }
  };
  return (
    <div className="filterate pt-5">
      <div className="btns mb-5 d-flex justify-content-center pt-5 pb-5 ">
        <div className="btn-filter">
          <Button
            variant="outline-light"
            onClick={() => dispatch(filteraction("all"))}
          >
            All
          </Button>
          <Button
            variant="outline-light"
            onClick={() => dispatch(filteraction("cover"))}
          >
            Cover
          </Button>
          <Button
            variant="outline-light"
            onClick={() => dispatch(filteraction("electronics"))}
          >
            electronics
          </Button>
          <Button
            variant="outline-light"
            onClick={() => dispatch(filteraction("plastic"))}
          >
            plastic
          </Button>
        </div>
      </div>
      <div></div>
      {statusFilter === true ? <All /> : showfilter()}
    </div>
  );
};
export default FilterationProducts;
