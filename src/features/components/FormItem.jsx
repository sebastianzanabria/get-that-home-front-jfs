/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FormItemContainer, Input, ButtonPrimary } from "../../sytles/general";
import Select from "react-select";

export default function FormItem({ label, name, type, target }) {
  const properties = [
    { value: "apartment", label: "An apartment" },
    { value: "house", label: "A house" },
  ];

  const operations = [
    { value: "rent", label: "Rent" },
    { value: "purchase", label: "Purchase" },
  ];
  return (
    <div>
      <FormItemContainer
        css={css`
          margin-right: ${target === "operations" ? "1rem" : "auto"};
        `}
      >
        <label htmlFor={name}>{label}</label>
        <div>
          {type === "text" && (
            <Input
              css={css`
                padding: 0;
                border: none;
                font-size: 16px;
                color: #435266;
              `}
              type="text"
              name={name}
            />
          )}
          {type === "submit" && (
            <ButtonPrimary
              css={css`
                width: 100%;
              `}
            >
              Search
            </ButtonPrimary>
          )}
          {type === "select" &&
            (target === "properties" ? (
              <Select name={name} options={properties} />
            ) : (
              <Select name={name} options={operations} />
            ))}
        </div>
      </FormItemContainer>
    </div>
  );
}
