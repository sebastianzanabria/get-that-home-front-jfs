import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "../features/properties/propertiesSlice";

export default configureStore({
  reducer: {
    properties: propertiesReducer,
  },
});
