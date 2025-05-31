import { configureStore } from "@reduxjs/toolkit";
import  authSliceReducer  from "./auth";
import  counterSlice  from "./counter";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSliceReducer,
  },
});

export default store;
 