import React, { useState } from "react";
import { ReactComponent as BathroomIcon } from "../../images/icons/badroom.svg";
import { ReactComponent as BedroomIcon } from "../../images/icons/bedroom.svg";
import { ReactComponent as AreaIcon } from "../../images/icons/area.svg";
import { ReactComponent as PetIcon } from "../../images/icons/pet.svg";
import { ReactComponent as HeartIcon } from "../../images/icons/heart.svg";
import { ReactComponent as HeartIconAlt } from "../../images/icons/heart_alt.svg";
import room from "../../images/room.jpg";
import {
  HeartContainer,
  ImageContainer,
  BasicInfo,
  Address,
  OtherOptions,
  PropertyContainer,
} from "../../sytles/properties";
import { Link } from "react-router-dom";

const PropertyItem = (props) => {
  let {
    id,
    address,
    district,
    province,
    bedrooms,
    bathrooms,
    area,
    price,
    pets_allowed,
  } = props;
  bathrooms = +bathrooms;
  area = +area;
  const [favorited, setFavorited] = useState(false);

  function toogleFavorited(event) {
    event.preventDefault();
    setFavorited(!favorited);
  }

  return (
    <PropertyContainer>
      <ImageContainer as={Link} to={`properties/${id}`}>
        <img src={room} alt="" />
        <HeartContainer onClick={toogleFavorited}>
          {favorited ? <HeartIconAlt /> : <HeartIcon />}
        </HeartContainer>
      </ImageContainer>
      <div>
        <BasicInfo>
          <h3>S/ {price}</h3>
          <div>{pets_allowed && <PetIcon />}</div>
        </BasicInfo>
        <Address>
          {address}, {district}, {province}
        </Address>
        <div>
          <OtherOptions>
            <li>
              <BedroomIcon /> {bedrooms}
            </li>
            <li>
              <BathroomIcon /> {bathrooms}
            </li>
            <li>
              <AreaIcon /> {area}m2
            </li>
          </OtherOptions>
        </div>
      </div>
    </PropertyContainer>
  );
};

export default PropertyItem;
