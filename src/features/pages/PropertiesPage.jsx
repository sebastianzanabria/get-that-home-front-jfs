import React from "react";
import PropertiesList from "../properties/PropertiesList";
import FilterProperties from "../components/FilterProperties";

const PropertiesPage = (params) => {
  let typeOfProperty = "apartment";
  if (params.location.pathname === "/properties/house")
    typeOfProperty = "house";
  const query = params.location.search;

  return (
    <div>
      <FilterProperties />
      <PropertiesList query={query} typeOfProperty={typeOfProperty} />
    </div>
  );
};

export default PropertiesPage;
