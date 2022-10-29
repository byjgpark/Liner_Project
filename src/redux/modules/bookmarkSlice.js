import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/request";

// posting bookmark for the search result
export const postBookmarkThunk = createAsyncThunk(
  "postBookmarkThunk",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post(`collection/document/{document-${payload}}`
      );
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
      const { data } = await instance.delete(`collection/document/{document-${payload}}`
      );
      return thunkAPI.fulfillWithValue(data.documents);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
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
    // posting bookmark for the search result
    [postBookmarkThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [postBookmarkThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [postBookmarkThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // delete bookmark for the search result
    [deleteBookmarkThunk.pending]: (state) => {
      state.isLoading = false;
    },
    [deleteBookmarkThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteBookmarkThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


export const { changeError } = searchSlice.actions;
export default searchSlice.reducer;
