import React from "react";
import { Input } from "../../sytles/general";
import { PriceContainer } from "../../sytles/properties";
import { Field } from "formik";

const PriceBox = () => {
  return (
    <div>
      <p style={{ marginTop: 0 }}>Price</p>
      <PriceContainer>
        <Field
          as={Input}
          style={{ padding: "8px 5px" }}
          type="num"
          name="priceMinimum"
          required
        />
        <span>-</span>
        <Field
          as={Input}
          style={{ padding: "8px 5px" }}
          type="num"
          name="priceMaximum"
          required
        />
      </PriceContainer>
    </div>
  );
};

export default PriceBox;
