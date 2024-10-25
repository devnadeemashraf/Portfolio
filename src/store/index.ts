import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

/**
 * Returning 'typeof' a (method) therefore 'ReturnType' is used
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Returning 'typeof' of a (property) therefore 'ReturnType' is not used
 */
export type AppDispatch = typeof store.dispatch;

export { store };
