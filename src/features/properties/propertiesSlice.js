import { createSlice } from "@reduxjs/toolkit";

export const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    loading: false,
    error: null,
    filter: false,
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
    disactivatedFilter: (state) => {
      state.filter = false;
    },
    propertiesFiltered: (state, action) => {
      const newProperties = state.properties.filter((property) =>
        property.address.toLowerCase().match(action.payload.toLowerCase())
      );
      state.filteredProperties = newProperties;
      state.filter = true;
    },
    propertiesPrices: (state, action) => {
      console.log({ action });
      const newProperties = state.properties.filter(
        (property) =>
          +property.price >= +action.payload.priceMinimum &&
          +property.price <= +action.payload.priceMaximum
      );
      state.filteredProperties = newProperties;
      state.filter = true;
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
  propertiesPrices,
  disactivatedFilter,
} = propertiesSlice.actions;

export const selectProperties = (state) => state.properties.properties;
export const selectSearchProperties = (state) =>
  state.properties.filteredProperties;

export default propertiesSlice.reducer;
