import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get
export const getList = createAsyncThunk("board/getList", async () => {
  try {
    const {
      data: { json },
    } = await axios.post("/board?type=list");
    return json;
  } catch (error) {
    console.log(error);
  }
});
// search title
export const searchListTitle = createAsyncThunk(
  "board/searchListTitle",
  async (searchTitle) => {
    try {
      const {
        data: { json },
      } = await axios.post("/board?type=list", {
        searchTitle,
      });
      return json;
    } catch (error) {
      console.log(error);
    }
  }
);
// search title
export const searchListContent = createAsyncThunk(
  "board/searchListContent",
  async (searchData) => {
    try {
      const {
        data: { json },
      } = await axios.post("/board?type=list", {
        searchData,
      });
      return json;
    } catch (error) {
      console.log(error);
    }
  }
);

// create
export const addBoard = createAsyncThunk(
  "board/addBoard",
  async ({ title, content, insert_user }, { dispatch }) => {
    try {
      await axios.post("/board?type=insert", {
        title,
        content,
        insert_user,
      });
      dispatch(getList());
    } catch (error) {
      console.log(error);
    }
  }
);

// edit
export const editBoard = createAsyncThunk(
  "board/editBoard",
  async ({ id, title, content }, { dispatch }) => {
    try {
      await axios.post("/board?type=update", {
        id,
        title,
        content,
      });
      dispatch(getList());
    } catch (error) {
      console.log(error);
    }
  }
);

// delete
export const deleteBoard = createAsyncThunk(
  "board/deleteBoard",
  async (id, { dispatch }) => {
    try {
      await axios.post("/board?type=delete", {
        id,
      });
      dispatch(getList());
    } catch (error) {
      console.log(error);
    }
  }
);

const boardSlice = createSlice({
  name: "board",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, { payload }) => {
      return payload;
    },
    [searchListTitle.fulfilled]: (state, { payload }) => {
      return payload;
    },
    [searchListContent.fulfilled]: (state, { payload }) => {
      return payload;
    },
  },
});

export const boardSilceReducer = boardSlice.reducer;
