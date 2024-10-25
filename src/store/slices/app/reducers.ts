import { PayloadAction } from "@reduxjs/toolkit";
import { TAppInitialState } from "./types";

export default {
  setAntialias: (state: TAppInitialState, actions: PayloadAction<boolean>) => {
    state.settings.display.antialias = actions.payload;
  },
  setPerformance: (
    state: TAppInitialState,
    actions: PayloadAction<WebGLPowerPreference>
  ) => {
    state.settings.display.performance = actions.payload;
  },
  setVolume: (state: TAppInitialState, actions: PayloadAction<number>) => {
    state.settings.audio.volume = actions.payload;
  },
  setIsMuted: (state: TAppInitialState, actions: PayloadAction<boolean>) => {
    state.settings.audio.isMuted = actions.payload;
  },
};
