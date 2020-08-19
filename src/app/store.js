import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import propertiesReducer from "../features/properties/propertiesSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    properties: propertiesReducer,
  },
});
