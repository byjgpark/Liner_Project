import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../modules/searchSlice";

const store = configureStore({
  reducer: {
    searchSlice,
  },
});

export default store;
