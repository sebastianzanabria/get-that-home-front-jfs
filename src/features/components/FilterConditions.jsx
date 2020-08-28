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
import { useDispatch } from "react-redux";
import {
  propertiesPrices,
  disactivatedFilter,
} from "../properties/propertiesSlice";

export const FilterConditions = ({ display, type }) => {
  const dispatch = useDispatch();

  function handleSubmit(values) {
    console.log({ values });
    if (!values.priceMinimum) {
      dispatch(disactivatedFilter());
    } else {
      dispatch(propertiesPrices(values));
    }
  }

  return (
    <FilterContainer style={{ display: display ? "block" : "none" }}>
      <Formik initialValues={{}} onSubmit={(values) => handleSubmit(values)}>
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
