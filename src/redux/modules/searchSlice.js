import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/request";

export const getResultThunk = createAsyncThunk(
  "getResultThunk",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`search/documents`, {
        params: {
          query: "javascript",
          size: 10,
          from: 0,
        },
      });
      return thunkAPI.fulfillWithValue(data.documents);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  results: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: {
    // Getting all the search results from given condition
    [getResultThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getResultThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.results = action.payload;
    },
    [getResultThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }, 
  },
});

export default searchSlice.reducer;
