import { RootState } from "@/store";

const selectSettings = (state: RootState) => state.app.settings;

export { selectSettings };
