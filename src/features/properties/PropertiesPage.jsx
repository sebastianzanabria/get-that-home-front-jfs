import React from "react";
import PropertiesList from "./PropertiesList";
import FilterProperties from "./FilterProperties";

const PropertiesPage = () => {
  return (
    <div>
      <FilterProperties />
      <PropertiesList />
    </div>
  );
};

export default PropertiesPage;
