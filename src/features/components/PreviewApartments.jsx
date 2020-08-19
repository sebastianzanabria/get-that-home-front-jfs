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
      <div
        css={css`
          text-align: center;
          margin-top: 190px;
        `}
      >
        <Content
          css={css`
            margin-top: 15px;
            margin-bottom: 20px;
            color: #8a8a97;
            position: relative;
            &:after {
              position: absolute;
              bottom: -16px;
              left: 50%;
              content: "";
              display: inline-block;
              width: 30px;
              height: 5px;
              background: #ffc252;
            }
          `}
        >
          Find an Apartment You Love
        </Content>
        <Subtitle
          css={css`
            margin-top: 35px;
            margin-bottom: 80px;
          `}
        >
          Homes for rent at the best prices
        </Subtitle>
      </div>
      <Properties>{listThreeProperties}</Properties>
    </div>
  );
};

export default PreviewApartments;
