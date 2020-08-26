/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Subtitle } from "../../sytles/general";
import { PreviewTextContainer, ContentText } from "../../sytles/home";
import PropertiesList from "../properties/PropertiesList";

const PreviewApartments = () => {
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
      <PropertiesList lastest />
    </div>
  );
};

export default PreviewApartments;
