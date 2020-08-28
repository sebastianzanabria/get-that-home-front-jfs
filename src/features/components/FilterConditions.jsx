import React from "react";
import {
  FilterContainer,
  FormFilter,
  ButtonContainer,
  OptionsFilterContainer,
} from "../../sytles/properties";
import { BoxCondition } from "./BoxCondition";
import { ButtonNormal } from "../../sytles/general";
import { Formik, Form } from "formik";

export const FilterConditions = ({ display, type }) => {
  return (
    <FilterContainer style={{ display: display ? "block" : "none" }}>
      <Formik>
        <FormFilter as={Form}>
          <OptionsFilterContainer>
            <BoxCondition type={type} />
          </OptionsFilterContainer>
          <ButtonContainer>
            <ButtonNormal type="submit">Done</ButtonNormal>
          </ButtonContainer>
        </FormFilter>
      </Formik>
    </FilterContainer>
  );
};
