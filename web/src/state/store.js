import { configureStore } from "@reduxjs/toolkit";
import sample from "./sample";

export const store = configureStore({
  reducer: { sample },
});
