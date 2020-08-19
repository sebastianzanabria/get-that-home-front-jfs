/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import {
  ButtonAlt,
  Button,
  Input,
  FilterContainer,
} from "../../sytles/general";
import { ReactComponent as SearchIcon } from "../../images/icons/search.svg";
import { ReactComponent as MoreIcon } from "../../images/icons/more.svg";
import { ReactComponent as ArrowDown } from "../../images/icons/arrow_down.svg";

const FilterProperties = () => {
  return (
    <FilterContainer>
      <div
        css={css`
          flex-grow: 1;
        `}
      >
        <div
          css={css`
            position: relative;
            display: inline-block;
            width: 300px;
          `}
        >
          <SearchIcon
            css={css`
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 10px;
            `}
          />
          <Input
            placeholder="Text here"
            type="search"
            name="search_text"
            id=""
            css={css`
              width: 100%;
            `}
          />
        </div>
        <ButtonAlt>Price</ButtonAlt>
        <ButtonAlt>Property Type</ButtonAlt>
        <ButtonAlt>Beds - Baths</ButtonAlt>
        <ButtonAlt
          css={css`
            display: inline-flex;
            align-items: center;
          `}
        >
          More{" "}
          <MoreIcon
            css={css`
              margin-left: 5px;
            `}
          />
        </ButtonAlt>
      </div>
      <div>
        <Button
          css={css`
            font-size: 16px;
          `}
        >
          Buying and Renting <ArrowDown />
        </Button>
      </div>
    </FilterContainer>
  );
};

export default FilterProperties;
