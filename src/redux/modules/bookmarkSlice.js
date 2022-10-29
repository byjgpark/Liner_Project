import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/request";

// posting bookmark for the search result
export const postBookmarkThunk = createAsyncThunk(
  "postBookmarkThunk",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post(`collection/document/{document-${payload}}`);
      return thunkAPI.fulfillWithValue(data.documents);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// delete bookmark for the search result
export const deleteBookmarkThunk = createAsyncThunk(
  "deleteBookmarkThunk",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.delete(`collection/document/{document-${payload}}`);
      return thunkAPI.fulfillWithValue(data.documents);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  status: [],
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
    [postBookmarkThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [postBookmarkThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.results = action.payload;
    },
    [postBookmarkThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Getting the search results when scrolled to the bottom of the page
    [deleteBookmarkThunk.pending]: (state) => {
      state.isLoading = false;
    },
    [deleteBookmarkThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.results = [...state.results].concat(action.payload);
    },
    [deleteBookmarkThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


export const { changeError } = searchSlice.actions;
export default searchSlice.reducer;
