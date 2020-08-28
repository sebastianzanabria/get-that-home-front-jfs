/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ReactComponent as SearchIcon } from "../../images/icons/search.svg";
import { Input } from "../../sytles/general";
import { useDispatch } from "react-redux";
import {
  propertiesFiltered,
  disactivatedFilter,
} from "../properties/propertiesSlice";

const AddressBox = () => {
  const dispatch = useDispatch();

  function handleChange(event) {
    const address = event.target.value;
    if (address == null || address === "") {
      dispatch(disactivatedFilter());
    } else {
      dispatch(propertiesFiltered(address));
    }
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
