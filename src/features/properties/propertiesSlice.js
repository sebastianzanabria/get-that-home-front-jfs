import { createSlice } from "@reduxjs/toolkit";

export const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    loading: false,
    error: null,
    search: null,
    filteredProperties: [],
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
    propertiesFiltered: (state, action) => {
      const newProperties = state.properties.filter((property) =>
        property.address.match(action.payload)
      );
      state.filteredProperties = newProperties;
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
  propertiesFiltered,
} = propertiesSlice.actions;

export const selectProperties = (state) => state.properties.properties;
export const selectSearchProperties = (state) =>
  state.properties.filteredProperties;

export default propertiesSlice.reducer;
