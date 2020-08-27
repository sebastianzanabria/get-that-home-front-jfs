import React from "react";
import { BedBathOptions } from "../../sytles/properties";
import { ButtonGrouped } from "../../sytles/general";

const BedBathAmount = ({ label, options }) => {
  const showOptions = options.map((option, index) => (
    <ButtonGrouped key={index}>{option.label}</ButtonGrouped>
  ));

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <span>{label}</span>
        <BedBathOptions>{showOptions}</BedBathOptions>
      </div>
    </>
  );
};

export default BedBathAmount;
