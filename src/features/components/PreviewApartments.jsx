/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useEffect } from "react";
import { Content, Subtitle } from "../../sytles/general";
import { useSelector, useDispatch } from "react-redux";
import {
  propertiesFetchStarted,
  propertiesFetchSucceeded,
  propertiesFetchFailed,
  selectProperties,
} from "../properties/propertiesSlice";
import { getAllProperties } from "../../app/api_properties";
import Loading from "../shared/Loading";
import PropertyItem from "../properties/PropertyItem";
import { Properties } from "../../sytles/properties";
import { PreviewTextContainer, ContentText } from "../../sytles/home";

const PreviewApartments = () => {
  const properties = useSelector((state) => selectProperties(state));
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.properties.loading);
  const error = useSelector((state) => state.properties.error);
  useEffect(() => {
    dispatch(propertiesFetchStarted());
    getAllProperties()
      .then((properties) => dispatch(propertiesFetchSucceeded(properties)))
      .catch((err) => propertiesFetchFailed(err));
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <div>There're a error: {error}...</div>;

  const threeProperties = properties.slice(0, 3);

  const listThreeProperties = threeProperties?.map((property) => (
    <PropertyItem key={property.id} {...property} />
  ));

  return (
    <div>
      <PreviewTextContainer>
        <ContentText>Find an Apartment You Love</ContentText>
        <Subtitle
          css={css`
            margin-top: 35px;
            margin-bottom: 80px;
          `}
        >
          Homes for rent at the best prices
        </Subtitle>
      </PreviewTextContainer>
      <Properties>{listThreeProperties}</Properties>
    </div>
  );
};

export default PreviewApartments;
