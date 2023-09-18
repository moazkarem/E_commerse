import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  productPagearray: [],
  loading2: false,
  error2: null,
  sendFilter: null,
  statusSendFilter: true,
  electronicProduct: [],
  jewerly: [],
  menProduct: [],
  womenProduct: [],
  AddtoCard: [],
  cartItems: [],
  AddToFav: [],
  statusFav: true,
  detailsproductAdmin: [],
  isloggedin: false,
  superAdmin: true,
};
// all product
export const getProductPage = createAsyncThunk(
  "product/getProductPage",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:9000/ProductPage");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// electronics
export const getelectronicproduct = createAsyncThunk(
  "product/getelectronicproduct",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:9000/electronicProductPage");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// jewerly
export const getjewely = createAsyncThunk(
  "product/getjewely",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:9000/jewerlyproductpage");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// men product
export const getMenProduct = createAsyncThunk(
  "product/getMenProduct",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:9000/mensproduct");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// women product
export const getwomenproduct = createAsyncThunk(
  "product/getwomenproduct",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:9000/womenproduct");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//=====================================================       start slices for admin page ===========================================                  //

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productDel, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:9000/ProductPage/${productDel.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      return productDel;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// insert new product ============================================================================================================================== //

//insert new post
export const inserProduct = createAsyncThunk(
  "product/inserProduct",
  async (newproduct, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:9000/ProductPage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newproduct),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//=====================================================      slice for details product  ===================================

// details slise
export const detailproductAdmin = createAsyncThunk(
  "product/detailproductAdmin",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:9000/ProductPage/${id}`);
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//=====================================================      slice for update product  ==================================

export const UpdateProduct = createAsyncThunk(
  "product/UpdateProduct",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:9000/ProductPage/${item.id}`, {
        method: "PATCH",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      console.log(item, "from server ");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//=====================================================       end slices for admin page ===========================================                  //
const ProductPageSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterSending: (state, action) => {
      state.sendFilter = action.payload;
      state.statusSendFilter = false;
    },
    AddToCard_action: (state, action) => {
      // state.diasableClear = true
      const findProduct = state.AddtoCard.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const cloneProduct = { ...action.payload, quantity: 1 };
        state.AddtoCard.push(cloneProduct);
      }
    },
    deletefromCard: (state, action) => {
      state.AddtoCard = state.AddtoCard.filter(
        (el) => el.id !== action.payload.id
      );
    },
    clear: (state, action) => {
      // state.diasableClear = false
      state.AddtoCard = [];
    },
    increase: (state, action) => {
      const item = state.AddtoCard.find(
        (item) => item.id === action.payload.id
      );
      item.quantity++;
    },
    decrease: (state, action) => {
      const item = state.AddtoCard.find(
        (item) => item.id === action.payload.id
      );
      item.quantity--;
    },
    // favorit action
    addFavorit: (state, action) => {
      state.statusFav = false;
      const findProduct = state.AddToFav.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const cloneProduct = { ...action.payload, quantity: 1 };
        state.AddToFav.push(cloneProduct);
      }
    },
    removeFromFavorite: (state, action) => {
      state.AddToFav = state.AddToFav.filter(
        (el) => el.id !== action.payload.id
      );
    },
    // clear
    resetFav: (state, action) => {
      state.AddToFav = [];
    },
    //================================================ log in =====================================================
    // log in as admin and user
    loginAdminUser: (state, action) => {
      if (action.payload.user === "Moaz Karem Mostafa") {
        state.isloggedin = true;
        state.superAdmin = true;
      } else if (action.payload.user === "Moaz") {
        state.isloggedin = true;
        state.superAdmin = false;
      } else {
        state.isloggedin = false;
      }
    },
    //================================================ log in =====================================================
    // super admin
    //   superAdminAction: (state, action) => {
    //     console.log(action.payload);
    //     if(action.payload.user === 'Moaz Karem Mostafa' )
    //     {
    //      state.isloggedin=true
    //      state.superAdmin=false
    //     }else{
    //      state.isloggedin = false
    //      state.superAdmin=true
    //     }
    //  }
  },
  extraReducers: {
    // all product
    [getProductPage.pending]: (state, action) => {
      state.loading2 = true;
      state.error2 = null;
    },
    [getProductPage.fulfilled]: (state, action) => {
      state.loading2 = false;
      state.error2 = null;
      state.productPagearray = action.payload;
    },
    [getProductPage.rejected]: (state, action) => {
      state.loading2 = false;
      state.error2 = action.payload;
    },
    //electronic product
    [getelectronicproduct.pending]: (state, action) => {
      state.loading2 = true;
      state.error2 = null;
    },
    [getelectronicproduct.fulfilled]: (state, action) => {
      state.loading2 = false;
      state.error2 = null;
      state.electronicProduct = action.payload;
    },
    [getelectronicproduct.rejected]: (state, action) => {
      state.loading2 = false;
      state.error2 = action.payload;
    },
    // jewerly product
    [getjewely.pending]: (state, action) => {
      state.loading2 = true;
      state.error2 = null;
    },
    [getjewely.fulfilled]: (state, action) => {
      state.loading2 = false;
      state.error2 = null;
      state.jewerly = action.payload;
    },
    [getjewely.rejected]: (state, action) => {
      state.loading2 = false;
      state.error2 = action.payload;
    },
    // men product
    [getMenProduct.pending]: (state, action) => {
      state.loading2 = true;
      state.error2 = null;
    },
    [getMenProduct.fulfilled]: (state, action) => {
      state.loading2 = false;
      state.error2 = null;
      state.menProduct = action.payload;
    },
    [getMenProduct.rejected]: (state, action) => {
      state.loading2 = false;
      state.error2 = action.payload;
    },
    // women product
    [getwomenproduct.pending]: (state, action) => {
      state.loading2 = true;
      state.error2 = null;
    },
    [getwomenproduct.fulfilled]: (state, action) => {
      state.loading2 = false;
      state.error2 = null;
      state.womenProduct = action.payload;
    },
    [getwomenproduct.rejected]: (state, action) => {
      state.loading2 = false;
      state.error2 = action.payload;
    },
    //=====================================================       start slices for admin page ===========================================                  //
    //delete post reducer here

    [deleteProduct.pending]: (state, action) => {
      state.loading2 = true;
      state.error2 = null;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.loading2 = false;
      state.error2 = null;
      state.productPagearray = state.productPagearray.filter(
        (el) => el.id !== action.payload.id
      );
    },
    [deleteProduct.rejected]: (state, action) => {
      state.loading2 = false;
      state.error2 = action.payload;
    },

    //================================================  insert new product ===================================================================//

    // insert post reducer here
    [inserProduct.pending]: (state, action) => {
      state.loading2 = true;
      state.error2 = null;
    },
    [inserProduct.fulfilled]: (state, action) => {
      state.loading2 = false;
      state.error2 = null;
      state.productPagearray.push(action.payload);
    },
    [inserProduct.rejected]: (state, action) => {
      state.loading2 = false;
      state.error2 = action.payload;
    },

    //================================================  details product ================================================

    // details slice
    [detailproductAdmin.pending]: (state, action) => {
      state.loading2 = true;
      state.error2 = null;
    },
    [detailproductAdmin.fulfilled]: (state, action) => {
      state.loading2 = false;
      state.error2 = null;
      state.detailsproductAdmin = action.payload;
    },
    [detailproductAdmin.rejected]: (state, action) => {
      state.loading2 = false;
      state.error2 = action.payload;
    },

    //================================================  update product ================================================

    [UpdateProduct.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [UpdateProduct.fulfilled]: (state, action) => {
      state.loading2 = false;
      state.error2 = null;
      state.detailsproductAdmin = action.meta.arg;
      console.log("moasss ", action.meta.arg);
    },
    [UpdateProduct.rejected]: (state, action) => {
      state.loading2 = false;
      state.error2 = action.payload;
    },
  },
});

export const {
  filterSending,
  AddToCard_action,
  deletefromCard,
  clear,
  increase,
  decrease,
  addFavorit,
  removeFromFavorite,
  resetFav,
  loginAdminUser,
  superAdminAction,
} = ProductPageSlice.actions;
export default ProductPageSlice.reducer;
