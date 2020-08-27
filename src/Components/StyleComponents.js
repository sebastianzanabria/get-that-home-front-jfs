import React from "react";
import {Button, Flex} from "@chakra-ui/core";

export const Container = ({children, ...props}) => <Flex maxW="1200px" mx="auto" {...props}>{children}</Flex>

export const MainButton = ({children, ...props}) => {
    return (
        <Button
            {...props}
            bg="teal.300"
            color="white"
            _hover={{ bg: "teal.400" }}
            _focus={{
                boxShadow:
                    "0 0 0 3px rgba(66,153,225,0.6);",
            }}
            border="none"
        >{children}</Button>
    );
}