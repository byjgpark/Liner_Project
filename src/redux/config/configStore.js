import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../modules/searchSlice";
import bookmarkSlice from "../modules/bookmarkSlice";

const store = configureStore({
  reducer: {
    searchSlice,
    bookmarkSlice
  },
});

export default store;
