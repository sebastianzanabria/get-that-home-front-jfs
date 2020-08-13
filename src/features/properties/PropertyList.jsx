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

const PropertyList = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => selectProperties(state));
  const loading = useSelector((state) => state.properties.loading);
  const error = useSelector((state) => state.properties.error);

  useEffect(() => {
    dispatch(propertiesFetchStarted());
    getAllProperties()
      .then((properties) => dispatch(propertiesFetchSucceeded(properties)))
      .catch((err) => dispatch(propertiesFetchFailed(err)));
  }, [dispatch]);

  const propertiesByDate = properties
    .slice()
    .sort((a, b) => b.created_at.localeCompare(a.created_at));

  const AllProperties = propertiesByDate.map((property) => (
    <PropertyItem key={property.id} {...property} />
  ));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>There're a error: {error}...</div>;

  return <Properties>{AllProperties}</Properties>;
};

export default PropertyList;