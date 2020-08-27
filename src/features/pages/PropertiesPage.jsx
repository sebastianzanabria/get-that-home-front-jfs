import React from "react";
import PropertiesList from "../properties/PropertiesList";
import FilterProperties from "../components/FilterProperties";

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
