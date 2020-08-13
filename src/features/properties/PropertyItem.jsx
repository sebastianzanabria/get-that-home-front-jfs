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

const PropertyItem = (props) => {
  let { address, district, province, bedrooms, bathrooms, area } = props;
  bathrooms = +bathrooms;
  area = +area;
  const [favorited, setFavorited] = useState(false);

  function toogleFavorited(params) {
    setFavorited(!favorited);
  }
  return (
    <PropertyContainer>
      <ImageContainer>
        <img src={room} alt="" />
        <HeartContainer onClick={toogleFavorited}>
          {favorited ? <HeartIconAlt /> : <HeartIcon />}
        </HeartContainer>
      </ImageContainer>
      <div>
        <BasicInfo>
          <h3>S/ 1000</h3>
          <div>
            <PetIcon />
          </div>
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
