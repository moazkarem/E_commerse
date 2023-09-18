import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// eslint-disable-next-line no-labels
const initialState = {
  bestDetails: [],
  category: [],
  discount: [],
  popular: [],
  filteration: [],
  MostSeling: [],
  bestSelling: [],
  statusFilter: true,
  activeClass: false,
  filtername: null,
  loading: false,
  error: null,
};
// slice to get best slice from json server
export const getBestDetails = createAsyncThunk(
  "best/getBestDetails",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:9000/bestDetails");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// slice to get category  from json server
export const getCategory = createAsyncThunk(
  "best/getCategory",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:9000/ShopCategory");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// slice to get discount  from json server
export const getdiscount = createAsyncThunk(
  "best/getdiscount",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:9000/discount");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// popular product component
export const getpopularProduct = createAsyncThunk(
  "best/getpopularProduct",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:9000/popularProducts");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// filteration component
export const getfilteration = createAsyncThunk(
  "best/getfilteration",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:9000/FilterationProduct");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// mostselling component
export const getMostselling = createAsyncThunk(
  "best/getMostselling",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:9000/MostSelling");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// best selling component
export const getsellingBest = createAsyncThunk(
  "best/getsellingBest",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:9000/BestSelingStore");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const BestSlice = createSlice({
  name: "best",
  initialState: initialState,
  reducers: {
    filteraction: (state, action) => {
      state.filtername = action.payload;
      state.statusFilter = false;
      state.activeClass = true;
    },
  },
  extraReducers: {
    [getBestDetails.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getBestDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.bestDetails = action.payload;
    },
    [getBestDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // category  get
    [getCategory.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.category = action.payload;
    },
    [getCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // discounts
    [getdiscount.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getdiscount.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.discount = action.payload;
    },
    [getdiscount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // popular
    [getpopularProduct.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getpopularProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.popular = action.payload;
    },
    [getpopularProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // filteration
    [getfilteration.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getfilteration.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.filteration = action.payload;
    },
    [getfilteration.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //mostselling
    [getMostselling.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getMostselling.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.MostSeling = action.payload;
    },
    [getMostselling.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //Best selling compnent
    [getsellingBest.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getsellingBest.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.bestSelling = action.payload;
    },
    [getsellingBest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { filteraction } = BestSlice.actions;
export default BestSlice.reducer;
