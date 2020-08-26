/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
  Title,
  Content,
  Subtitle,
  ButtonSecondary,
  Container,
  ButtonPrimary,
} from "../../sytles/general";

import FormHomePage from "../components/FormHomePage";
import PreviewApartments from "../components/PreviewApartments";
import forSaleImage from "../../images/for_sale.jpg";
import IllustrationImage from "../../images/Illustration.jpg";
import { Link } from "react-router-dom";
import {
  MeetContainer,
  CreateAccountContainer,
  ForSaleContainer,
} from "../../sytles/home";

const Home = () => {
  return (
    <div
      css={css`
        background-image: url(${IllustrationImage});
        background-position: top;
        background-repeat: no-repeat;
        background-size: 100% 400px;
      `}
    >
      <Container>
        <MeetContainer>
          <div style={{ textAlign: "center" }}>
            <Title>Meet your new home</Title>
            <Content>The easiest way to find where you belong</Content>
          </div>
          <FormHomePage />
        </MeetContainer>
        <PreviewApartments />
      </Container>
      <CreateAccountContainer>
        <Subtitle
          css={css`
            width: 70%;
            margin: 0 auto;
            margin-bottom: 24px;
          `}
        >
          Getting someone to rent your apartment has never been this easy
        </Subtitle>
        <ButtonSecondary>Create an account now</ButtonSecondary>
      </CreateAccountContainer>
      <Container>
        <ForSaleContainer>
          <div>
            <img src={forSaleImage} alt="for_sale" />
          </div>
          <div>
            <Content
              css={css`
                color: #000000;
                margin-bottom: 17px;
                font-size: 28px;
              `}
            >
              Check the best priced properties in the town
            </Content>
            <ButtonPrimary
              as={Link}
              to="/properties"
              css={css`
                padding: 10px 80px;
                font-weight: 600;
                font-size: 16px;
              `}
            >
              Find a home
            </ButtonPrimary>
          </div>
        </ForSaleContainer>
      </Container>
    </div>
  );
};

export default Home;
