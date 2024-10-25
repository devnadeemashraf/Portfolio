import { TAppInitialState } from "./types";

const initialState: TAppInitialState = {
  settings: {
    display: {
      antialias: false,
      performance: "default",
    },
    audio: {
      volume: 0.5,
      isMuted: false,
    },
  },
};

export default initialState;
