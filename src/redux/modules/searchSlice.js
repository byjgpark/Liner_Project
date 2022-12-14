import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/request";

// Getting all the search results from given condition
export const getSearchThunk = createAsyncThunk(
  "getResultThunk",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`search/documents`, {
        params: {
          query: payload.query,
          size: payload.size,
          from: payload.from,
        },
      });
      return thunkAPI.fulfillWithValue(data.documents);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// Getting the search results when scrolled to the bottom of the page
export const getScrollThunk = createAsyncThunk(
  "getScrollThunk",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`search/documents`, {
        params: {
          query: payload.query,
          size: payload.size,
          from: payload.from,
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
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeError: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: {
    // Getting all the search results from given condition
    [getSearchThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getSearchThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.results = action.payload;
    },
    [getSearchThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Getting the search results when scrolled to the bottom of the page
    [getScrollThunk.pending]: (state) => {
      state.isLoading = false;
    },
    [getScrollThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.results = [...state.results].concat(action.payload);
    },
    [getScrollThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


export const { changeError } = searchSlice.actions;
export default searchSlice.reducer;
