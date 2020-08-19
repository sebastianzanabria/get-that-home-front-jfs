/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { FormHome, FormItem, Input, ButtonPrimary } from "../../sytles/general";
import { ReactComponent as ArrowDownIcon } from "../../images/icons/arrow_down.svg";

const FormHomePage = () => {
  return (
    <FormHome>
      <FormItem>
        <label htmlFor="">I'm Looking For</label>
        <div>
          An Apartment
          <ArrowDownIcon
            css={css`
              margin-left: 13px;
            `}
          />
        </div>
      </FormItem>
      <FormItem>
        <label htmlFor="">I want to</label>
        <div>
          Rent
          <ArrowDownIcon
            css={css`
              margin-left: 13px;
            `}
          />
        </div>
      </FormItem>
      <FormItem
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
      </FormItem>
      <FormItem
        css={css`
          border-right: none;
        `}
      >
        <div>
          <ButtonPrimary>Search</ButtonPrimary>
        </div>
      </FormItem>
    </FormHome>
  );
};

export default FormHomePage;
