import React from "react";
import { Input } from "../../sytles/general";
import { PriceContainer } from "../../sytles/properties";

const PriceBox = () => {
  return (
    <div>
      <p style={{ marginTop: 0 }}>Price</p>
      <PriceContainer>
        <Input type="num" />
        <span>-</span>
        <Input type="num" />
      </PriceContainer>
    </div>
  );
};

export default PriceBox;
