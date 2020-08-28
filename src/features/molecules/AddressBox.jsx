/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useContext } from "react";
import { ReactComponent as SearchIcon } from "../../images/icons/search.svg";
import { Input } from "../../sytles/general";
import { useHistory } from "react-router-dom";
import { FilterContext } from "../pages/PropertiesPage";

const AddressBox = () => {
  const history = useHistory();

  const { modifyFilter } = useContext(FilterContext);

  function handleChange(event) {
    const address = event.target.value;
    modifyFilter(address);
    history.push(`/properties?address=${address}`);
  }
  return (
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
        onChange={handleChange}
        placeholder="Text here"
        type="search"
        name="search_text"
        id=""
        css={css`
          width: 100%;
        `}
      />
    </div>
  );
};

export default AddressBox;
