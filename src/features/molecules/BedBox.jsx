import React from "react";
import BedBathAmount from "../atoms/BedBathAmount";

const BedBox = () => {
  const bedrooms = [
    { label: "Any", value: 0 },
    { label: "Studio", value: 0 },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4+", value: 4 },
  ];

  const bathrooms = [
    { label: "Any", value: 0 },
    { label: "1+", value: 1 },
    { label: "1.5+", value: 1.5 },
    { label: "2+", value: 2 },
    { label: "3+", value: 3 },
    { label: "4+", value: 4 },
  ];

  return (
    <div>
      <BedBathAmount label="Bedrooms" options={bedrooms} />
      <BedBathAmount label="Bathrooms" options={bathrooms} />
    </div>
  );
};

export default BedBox;
