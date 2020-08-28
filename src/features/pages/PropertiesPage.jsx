import React, { useState } from "react";
import PropertiesList from "../properties/PropertiesList";
import FilterProperties from "../components/FilterProperties";

export const FilterContext = React.createContext();

const PropertiesPage = (params) => {
  const [filter, setFilter] = useState(null);
  const query = params.location.search;

  return (
    <div>
      <FilterContext.Provider
        value={{ filter, modifyFilter: (value) => setFilter(value) }}
      >
        <FilterProperties />
        <PropertiesList query={query} search={filter} />
      </FilterContext.Provider>
    </div>
  );
};

export default PropertiesPage;
