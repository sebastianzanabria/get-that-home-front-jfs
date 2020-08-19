import React, { useEffect } from "react";
import { getAllProperties } from "../../app/api_properties";
import { Properties } from "../../sytles/properties";
import PropertyItem from "./PropertyItem";
import { useDispatch, useSelector } from "react-redux";
import {
  propertiesFetchStarted,
  propertiesFetchSucceeded,
  propertiesFetchFailed,
  selectProperties,
} from "./propertiesSlice";
import Loading from "../shared/Loading";

const PropertiesList = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => selectProperties(state));
  const loading = useSelector((state) => state.properties.loading);
  const error = useSelector((state) => state.properties.error);

  useEffect(() => {
    if (properties.length === 0) {
      dispatch(propertiesFetchStarted());
      getAllProperties()
        .then((properties) => dispatch(propertiesFetchSucceeded(properties)))
        .catch((err) => dispatch(propertiesFetchFailed(err)));
    }
  }, [dispatch, properties.length]);

  const propertiesByDate = properties
    .slice()
    .sort((a, b) => b.created_at.localeCompare(a.created_at));

  const AllProperties = propertiesByDate?.map((property) => (
    <PropertyItem key={property.id} {...property} />
  ));

  if (loading) return <Loading />;
  if (error) return <div>There're a error: {error}...</div>;

  return (
    <>
      <p>{properties.length} Properties found</p>
      <Properties>{AllProperties}</Properties>
    </>
  );
};

export default PropertiesList;
