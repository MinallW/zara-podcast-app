import { configureStore } from "@reduxjs/toolkit";
import podcastReducer from './features/podcastSlice'
import loadingReducer from './features/loadingSlice'

export const store = configureStore({
  reducer: {
    podcastReducer,
    loadingReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
