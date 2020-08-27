import React from "react";
import {
  FilterContainer,
  FormFilter,
  ButtonContainer,
  OptionsFilterContainer,
} from "../../sytles/properties";
import { BoxCondition } from "./BoxCondition";
import { ButtonNormal } from "../../sytles/general";

export const FilterConditions = ({ display, type }) => {
  return (
    <FilterContainer style={{ display: display ? "block" : "none" }}>
      <FormFilter>
        <OptionsFilterContainer>
          <BoxCondition type={type} />
        </OptionsFilterContainer>
        <ButtonContainer>
          <ButtonNormal>Done</ButtonNormal>
        </ButtonContainer>
      </FormFilter>
    </FilterContainer>
  );
};
