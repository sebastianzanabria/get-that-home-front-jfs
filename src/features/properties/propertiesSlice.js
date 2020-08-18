import { createSlice } from "@reduxjs/toolkit";

export const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    loading: false,
    error: null,
    properties: [],
  },
  reducers: {
    propertiesFetchStarted: (state) => {
      state.loading = true;
    },
    propertiesFetchSucceeded: (state, action) => {
      state.properties = action.payload;
      state.loading = false;
    },
    propertiesFetchFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  propertiesFetchStarted,
  propertiesFetchSucceeded,
  propertiesFetchFailed,
} = propertiesSlice.actions;

export const selectProperties = (state) => state.properties.properties;

export default propertiesSlice.reducer;
