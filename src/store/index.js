import { configureStore } from "@reduxjs/toolkit";
import BestDetail from "./BestDetailsSlice";
import productPage from "./ProductPageSlice";
const store = configureStore({
  reducer: { BestDetail, productPage },
});
export default store;
