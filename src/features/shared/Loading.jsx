import React from "react";
import { LoadingEffect, LoadingContainer } from "../../sytles/general";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingEffect>
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
      </LoadingEffect>
    </LoadingContainer>
  );
};

export default Loading;
