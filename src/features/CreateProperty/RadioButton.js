import {Button} from "@chakra-ui/core";
import React from "react";

const RadioButton = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, first, ...rest } = props;
    return (
        <Button
            ref={ref}
            bg={isChecked ? "teal.300" : "white"}
            color={isChecked ? "white" : "teal.300"}
            border="1px"
            fontWeight="normal"
            borderRadius={first ? "0.25rem 0 0 0.25rem" : "0 0.25rem 0.25rem 0"}
            borderColor="teal.300"
            aria-checked={isChecked}
            role="radio"
            isDisabled={isDisabled}
            _hover={null}
            _active={null}
            _focus={null}
            {...rest}
        />
    );
});

export default RadioButton;