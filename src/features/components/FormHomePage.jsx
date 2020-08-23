/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import {
  FormHome,
  FormItem as FormItemContainer,
  Input,
  ButtonPrimary,
} from "../../sytles/general";
import { ReactComponent as ArrowDownIcon } from "../../images/icons/arrow_down.svg";

const FormHomePage = () => {
  return (
    <FormHome>
      <FormItemContainer>
        <label htmlFor="">I'm Looking For</label>
        <div>
          An Apartment
          <ArrowDownIcon
            css={css`
              margin-left: 13px;
            `}
          />
        </div>
      </FormItemContainer>
      <FormItemContainer
        css={css`
          margin-right: 1rem;
        `}
      >
        <label htmlFor="">I want to</label>
        <div>
          Rent
          <ArrowDownIcon
            css={css`
              margin-left: 13px;
            `}
          />
        </div>
      </FormItemContainer>
      <FormItemContainer
        css={css`
          flex-grow: 1;
        `}
      >
        <label htmlFor="">Where</label>
        <div>
          <Input
            css={css`
              padding: 0;
              border: none;
              font-size: 16px;
              color: #435266;
            `}
            type="text"
            placeholder="your place"
          />
        </div>
      </FormItemContainer>
      <FormItemContainer
        css={css`
          border-right: none;
        `}
      >
        <div>
          <ButtonPrimary
            css={css`
              width: 100%;
            `}
          >
            Search
          </ButtonPrimary>
        </div>
      </FormItemContainer>
    </FormHome>
  );
};

export default FormHomePage;
