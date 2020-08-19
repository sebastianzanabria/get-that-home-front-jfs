/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
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
        <div
          css={css`
            width: 90%;
            margin: 0 auto;
          `}
        >
          <div style={{ textAlign: "center" }}>
            <Title>Meet your new home</Title>
            <Content>The easiest way to find where you belong</Content>
          </div>
          <FormHomePage />
        </div>
        <PreviewApartments />
      </Container>
      <div
        css={css`
          background-color: #f7fbfd;
          text-align: center;
          width: 100%;
          padding-top: 100px;
          padding-bottom: 100px;
          margin-top: 100px;
        `}
      >
        <Subtitle
          css={css`
            width: 90%;
            margin: 0 auto;
            margin-bottom: 24px;
          `}
        >
          Getting someone to rent your apartment has never been this easy
        </Subtitle>
        <ButtonSecondary>Create an account now</ButtonSecondary>
      </div>
      <Container>
        <div
          css={css`
          margin-top:100px;
          margin-bottom:100px;
        display:grid;
        align-items:center;
        grid-template-columns: 1fr
        gap: 1rem;
        @media(min-width:768px){
            
            grid-template-columns: 1fr 1fr
        }
      `}
        >
          <div
            css={css`
              justify-self: center;
              @media (min-width: 768px) {
                justify-self: left;
              }
            `}
          >
            <img src={forSaleImage} alt="for_sale" />
          </div>
          <div
            css={css`
              text-align: center;
              @media (min-width: 768px) {
                text-align: left;
              }
            `}
          >
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
              css={css`
                padding: 10px 80px;
                font-weight: 600;
                font-size: 16px;
              `}
            >
              Find a home
            </ButtonPrimary>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
