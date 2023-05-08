import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      const { payload } = action;
      state.lang = payload;
    },
  },
});

export const changeLang = languageSlice.actions.changeLang;

export default languageSlice.reducer;
