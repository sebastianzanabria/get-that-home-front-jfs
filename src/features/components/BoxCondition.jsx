import React from "react";
import PriceBox from "../molecules/PriceBox";
import PropertyBox from "../molecules/PropertyBox";
import BedBox from "../molecules/BedBox";
import MoreBox from "../molecules/MoreBox";

export const BoxCondition = ({ type }) => {
  const Condition = () => {
    switch (type) {
      case "price":
        return <PriceBox />;
      case "property":
        return <PropertyBox />;
      case "bed":
        return <BedBox />;
      default:
        return <MoreBox />;
    }
  };

  return <Condition />;
};
