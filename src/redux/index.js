import { configureStore } from "@reduxjs/toolkit";
import exchangeReducer from "./exchangeSlice";

const store = configureStore({
  reducer: {
    exchange: exchangeReducer,
  },
});

export default store;
