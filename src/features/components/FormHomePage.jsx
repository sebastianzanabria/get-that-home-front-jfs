import React from "react";
import { FormHome } from "../../sytles/general";
import FormItem from "./FormItem";

const FormHomePage = () => {
  return (
    <FormHome method="GET" action="/properties">
      <FormItem
        label="I'm Looking For"
        name="property"
        type="select"
        target="properties"
      />
      <FormItem
        label="I want to"
        name="operation"
        type="select"
        target="operations"
      />
      <FormItem label="Where" name="place" type="text" />
      <FormItem label="Search" type="submit" />
    </FormHome>
  );
};

export default FormHomePage;
