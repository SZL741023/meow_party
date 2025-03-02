import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASEURL;
const API_PATH = import.meta.env.VITE_API_PATH;
const productInitial = [
  {
    imageUrl: "",
    title: "",
    category: "",
    unit: "",
    origin_price: 0,
    price: 0,
    description: "",
    content: "",
    is_enabled: 0,
    imagesUrl: [""],
  },
];

export const getProductsDataAsync = createAsyncThunk(
  "productSlice/getProductsDataAsync ",
  async () => {
    try {
      const response = await axios.get(
        `${API_BASE}/api/${API_PATH}/products/all`,
      );
      return response.data.products;
    } catch (error) {
      console.log(error);
    }
  },
);
export const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    data: productInitial,
    status: "idle",
    error: "",
  },
  reducers: {
    getProductsData: (state, { payload }) => {
      state.data = payload;
      console.log("getProductsData", state.data);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductsDataAsync.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getProductsDataAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { getProductsData } = productSlice.actions;
export default productSlice.reducer;
