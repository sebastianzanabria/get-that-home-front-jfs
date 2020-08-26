/** @jsx jsx */
import { css, jsx } from "@emotion/core";
// import React from "react";
import {
  ButtonAlt,
  Button,
  Input,
  FilterContainer,
  ButtonFilter,
} from "../../sytles/general";
import { ReactComponent as SearchIcon } from "../../images/icons/search.svg";
import { ReactComponent as MoreIcon } from "../../images/icons/more.svg";
import { ReactComponent as ArrowDown } from "../../images/icons/arrow_down.svg";
import { FilterItem } from "../../sytles/home";

const FilterProperties = () => {
  return (
    <FilterContainer>
      <div
        css={css`
          flex-grow: 1;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 0 !important;
        `}
      >
        <div
          css={css`
            position: relative;
            display: inline-block;
            width: 100%;
            @media (min-width: 1200px) {
              width: 300px;
            }
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
        <FilterItem>
          <ButtonFilter>Price</ButtonFilter>
        </FilterItem>
        <FilterItem>
          <ButtonFilter>Property Type</ButtonFilter>
        </FilterItem>
        <FilterItem>
          <ButtonFilter>Beds - Baths</ButtonFilter>
        </FilterItem>
        <FilterItem>
          <ButtonFilter
            css={css`
              display: inline-flex;
              align-items: center;
              justify-content: center;
            `}
          >
            More{" "}
            <MoreIcon
              css={css`
                margin-left: 5px;
              `}
            />
          </ButtonFilter>
        </FilterItem>
      </div>
      <div
        css={css`
          flex-grow: 1;
          text-align: center;
          @media (min-width: 1200px) {
            text-align: right;
          }
        `}
      >
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
