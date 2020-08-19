import React from "react";
import {
    Box, Text,
} from "@chakra-ui/core";
import {MainButton} from '../../Components/StyleComponents'
export default function AsideComponent(props){
    return (
        <Box as="aside" boxShadow="md" py="24px" {...props}>
            <MainButton fontFamily="Helvetica">Contact advertiser</MainButton>
            <Text mt="12px" color="teal.500" fontFamily="heading">Favorited <Text as="span" color="red.600">&#10084;</Text></Text>
        </Box>
    );
}