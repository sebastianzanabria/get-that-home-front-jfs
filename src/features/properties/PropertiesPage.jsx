import React from "react";
import PropertiesList from "./PropertiesList";
import FilterProperties from "./FilterProperties";

const PropertiesPage = (params) => {
  const query = params.location.search;

  return (
    <div>
      <FilterProperties />
      <PropertiesList query={query} />
    </div>
  );
};

export default PropertiesPage;
