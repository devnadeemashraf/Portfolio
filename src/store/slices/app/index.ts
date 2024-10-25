import { createSlice } from "@reduxjs/toolkit";

import initialState from "./initialState";
import reducers from "./reducers";

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers,
});

// Actions
export const { setAntialias, setPerformance, setVolume, setIsMuted } =
  appSlice.actions;

// Reducer
export default appSlice.reducer;
