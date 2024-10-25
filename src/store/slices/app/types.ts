type TAppDisplaySettings = {
  antialias: boolean;
  performance: WebGLPowerPreference;
};

type TAppAudioSettings = {
  volume: number;
  isMuted: boolean;
};

export type TAppInitialState = {
  settings: {
    display: TAppDisplaySettings;
    audio: TAppAudioSettings;
  };
};
