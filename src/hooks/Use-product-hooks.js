import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailproductAdmin } from "../store/ProductPageSlice";
import { useParams } from "react-router-dom";
const Useproducthooks = () => {
  const { loading2, detailsproductAdmin } = useSelector(
    (state) => state.productPage
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(detailproductAdmin(id));
  }, [dispatch, id]);
  return { loading2, detailsproductAdmin };
};
export default Useproducthooks;
