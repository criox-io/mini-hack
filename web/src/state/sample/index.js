import { createSlice } from "@reduxjs/toolkit";
import { RESOURCE } from "@/constant";
import { initialState } from "./state";

const { reducer, actions } = createSlice({
  name: RESOURCE.SAMPLE,
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default reducer;
