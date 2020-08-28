import React, { useEffect } from "react";
import {
  getAllProperties,
  getFilteredProperties,
  getLastestProperties,
} from "../../app/api_properties";
import { Properties } from "../../sytles/properties";
import PropertyItem from "./PropertyItem";
import { useDispatch, useSelector } from "react-redux";
import {
  propertiesFetchStarted,
  propertiesFetchSucceeded,
  propertiesFetchFailed,
  selectProperties,
  selectSearchProperties,
} from "./propertiesSlice";
import Loading from "../shared/Loading";

const PropertiesList = ({ query, lastest }) => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => selectProperties(state));
  const filteredProperties = useSelector((state) =>
    selectSearchProperties(state)
  );

  const loading = useSelector((state) => state.properties.loading);
  const error = useSelector((state) => state.properties.error);
  const filter = useSelector((state) => state.properties.filter);

  useEffect(() => {
    dispatch(propertiesFetchStarted());
    if (query) {
      getFilteredProperties(query)
        .then((data) => dispatch(propertiesFetchSucceeded(data)))
        .catch((err) => dispatch(propertiesFetchFailed(err)));
    } else if (lastest) {
      getLastestProperties()
        .then((properties) => dispatch(propertiesFetchSucceeded(properties)))
        .catch((err) => dispatch(propertiesFetchFailed(err)));
    } else {
      getAllProperties()
        .then((properties) => dispatch(propertiesFetchSucceeded(properties)))
        .catch((err) => dispatch(propertiesFetchFailed(err)));
    }
  }, [dispatch, query, lastest]);

  const propertiesByDate = properties
    .slice()
    .sort((a, b) => b.created_at.localeCompare(a.created_at));

  const AllProperties = propertiesByDate?.map((property) => (
    <PropertyItem key={property.id} {...property} />
  ));

  const AllPropertiesSearched = filteredProperties?.map((property) => (
    <PropertyItem key={property.id} {...property} />
  ));

  if (loading) return <Loading />;
  if (error) return <div>There're a error: {error}...</div>;

  return (
    <>
      {!lastest && (
        <p>
          {filteredProperties.length > 0 && filter && (
            <span>{filteredProperties.length} Properties found</span>
          )}
          {!filter && <span>{properties.length} Properties found</span>}
          {filter && filteredProperties.length === 0 && (
            <span>Any properties found</span>
          )}
        </p>
      )}
      {filter ? (
        <Properties>{AllPropertiesSearched}</Properties>
      ) : (
        <Properties>{AllProperties}</Properties>
      )}
    </>
  );
};

export default PropertiesList;
