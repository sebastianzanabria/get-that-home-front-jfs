/** @jsx jsx */
import { css, jsx } from "@emotion/core";
// import React from "react";
import { Button, FilterContainer, ButtonFilter } from "../../sytles/general";
import { ReactComponent as MoreIcon } from "../../images/icons/more.svg";
import { ReactComponent as ArrowDown } from "../../images/icons/arrow_down.svg";
import { FilterItem } from "../../sytles/home";
import { FilterConditions } from "./FilterConditions";
import { useState } from "react";
import AddressBox from "../molecules/AddressBox";

const FilterProperties = () => {
  const [display, setDisplay] = useState({
    price: false,
    property: false,
    bed: false,
    more: false,
  });

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
        <AddressBox />
        <FilterItem>
          <ButtonFilter onClick={() => setDisplay({ price: !display.price })}>
            Price
          </ButtonFilter>
          <FilterConditions type="price" display={display.price} />
        </FilterItem>
        <FilterItem>
          <ButtonFilter
            onClick={() => setDisplay({ property: !display.property })}
          >
            Property Type
          </ButtonFilter>
          <FilterConditions type="property" display={display.property} />
        </FilterItem>
        <FilterItem>
          <ButtonFilter onClick={() => setDisplay({ bed: !display.bed })}>
            Beds - Baths
          </ButtonFilter>
          <FilterConditions type="bed" display={display.bed} />
        </FilterItem>
        <FilterItem>
          <ButtonFilter
            css={css`
              display: inline-flex;
              align-items: center;
              justify-content: center;
            `}
            onClick={() => setDisplay({ more: !display.more })}
          >
            More <MoreIcon style={{ marginLeft: "5px" }} />
          </ButtonFilter>
          <FilterConditions type="more" display={display.more} />
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
        <Button>
          Buying and Renting <ArrowDown />
        </Button>
      </div>
    </FilterContainer>
  );
};

export default FilterProperties;
