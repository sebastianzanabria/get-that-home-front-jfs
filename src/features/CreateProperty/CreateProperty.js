import React, {useState} from "react";
import {
    Text,
    Heading,
    FormControl,
    FormLabel,
    RadioButtonGroup,
    FormHelperText,
    Input,
    Select,
    InputGroup,
    InputRightAddon,
    RadioGroup,
    Radio,
    Flex,
    CheckboxGroup,
    Checkbox,
    Box, Stack, Switch, Textarea
} from "@chakra-ui/core";
import { useFormik } from 'formik';
import * as Yup from 'yup'

import RadioButton from './RadioButton'
import UpImages from "./UpImages";

const Ameneties = ['Central Air Conditioning', 'Stove', 'Fridge', 'TV', 'Laundry room', 'Balcony',
    'Furnished', 'Dishwasher', 'Closets', 'Walk-in closet', 'Dog room'];

const buildingAmenities = ['Parking spot', 'Park', 'Child pool', 'Pool', '24/7 surveillance', 'Access Control',
    'Dog park', 'Barbecue', 'Roof pool', 'Fitness center', 'Business center',
    'Childcare center', 'Playground'];

const closeBy = ['Supermarket', 'Minimarket', 'Ramen restaurant', 'Restaurants', 'Child school', 'University',
    'Park', 'Dog school'];

const CheckBoxGr = ({onChange,children}) => (
    <CheckboxGroup
        onChange={onChange}
        isInline
        spacing={6}
        variantColor="teal"
    > {children}
    </CheckboxGroup>
);

const FormItem = ({label, required, helperText, children, ...props}) => (
    <FormControl mt="3" width="100%" {...props}>
        <FormLabel fontWeight="bold" mb="2">
            {label}
            {required && <Text as="span" fontWeight="normal" color="red.500">*</Text>}
        </FormLabel>
        {children}
        {helperText && <FormHelperText mt="2">{helperText}</FormHelperText>}
    </FormControl>
);

export default function CreateProperty(){



    // Formik

    const formik = useFormik({
        initialValues: {
            operationType: "sell",
            address: "",
            maintenance: "",
            propertyType: "apartment",
            bedrooms: "",
            bathrooms: "",
            area: "",
            monthlyRent: "",
            apartmentAmenities: [],
            buildingAmenities: [],
            closeBy: [],
            petsAllowed: false,
            description: "",
            images: []
        },
        validationSchema: Yup.object({
            operationType: Yup.string()
                .matches(/sell|rent/, "Must be a valid option"),
            address: Yup.string()
                .min(3, "Must have more than 3 letters")
                .required("Is required"),
            maintenance: Yup.string()
                .matches(/^\d+$/, "Must be a valid number")
                .required("Is required"),
            propertyType: Yup.string()
                .matches(/apartment|house/, "Must be a valid option")
                .required("Is required"),
            bedrooms: Yup.string()
                .matches(/^\d+$/, "Must be a valid number")
                .required("Is required"),
            bathrooms: Yup.string()
                .matches(/^\d+$/, "Must be a valid number")
                .required("Is required"),
            area: Yup.string()
                .matches(/^\d+$/, "Must be a valid number")
                .required("Is required"),
            monthlyRent: Yup.string()
                .matches(/^\d+$/, "Must be a valid number")
                .required("Is required"),
            apartmentAmenities: Yup.array(),
            buildingAmenities: Yup.array(),
            closeBy: Yup.array(),
            petsAllowed: Yup.boolean(),
            description: Yup.string()
                .required("Is required"),
            images: Yup.array()
                .required("Is required")
                .min(1)
        }),
        onSubmit: values => {
            console.log(values)
        }
    })
    const haveError = (name) => formik.errors[name] && formik.touched[name]

    const  handleChangeFormik = (name) => (value)=>{
            formik.values[name] = value
        }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Heading fontSize="1.75rem">Create a property listing</Heading>
            <Heading as="h3" fontSize="2xl" mt="6">Listening information</Heading>
            <Flex flexWrap="wrap" maxW="620px">
                <FormItem
                    label="Operation type"
                    helperText="Are you looking to rent or sell this property?"
                    required
                >
                    <RadioButtonGroup  isInline spacing={0} onChange={handleChangeFormik("operationType")} defaultValue="sell">
                        <RadioButton first value="sell">Sell</RadioButton>
                        <RadioButton value="rent">Rent</RadioButton>
                    </RadioButtonGroup>
                </FormItem>
                <FormItem htmlFor="address" label="Address" required>
                    <Input name="address" maxW="392px" borderColor={haveError("address") ? "red.300" : "gray.200"} {...formik.getFieldProps("address")}/>
                </FormItem>
                <FormItem label="Monthly rent" required>
                    <Input borderColor={haveError("monthlyRent") ? "red.300" : "gray.200"} maxW="392px" {...formik.getFieldProps("monthlyRent")}/>
                </FormItem>
                <FormItem label="Maintenance" helperText="Amount paid to the building for maintenance.">
                    <Input borderColor={haveError("maintenance") ? "red.300" : "gray.200"} maxW="392px" {...formik.getFieldProps("maintenance")}/>
                </FormItem>
                <FormItem label="Property type">
                    <RadioGroup defaultValue="apartment" onChange={handleChangeFormik("propertyType")} spacing={4} isInline>
                        <Radio variantColor="teal" value="apartment">
                            Apartment
                        </Radio>
                        <Radio variantColor="teal" value="house">
                            House
                        </Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="Bedrooms" required width="32%" mr="3">
                    <Select borderColor={haveError("bedrooms") ? "red.300" : "gray.200"} placeholder="Select option"  {...formik.getFieldProps("bedrooms")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </Select>
                </FormItem>
                <FormItem label="Bathrooms" required width="32%" mr="3">
                    <Select borderColor={haveError("bathrooms") ? "red.300" : "gray.200"} placeholder="Select option" {...formik.getFieldProps("bathrooms")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                        <option value="3.5">3.5</option>
                        <option value="4">4</option>
                        <option value="4.5">4.5</option>
                    </Select>
                </FormItem>
                <FormItem label="Area (m2)" required width="32%">
                    <InputGroup>
                        <Input borderColor={haveError("area") ? "red.300" : "gray.200"} {...formik.getFieldProps("area")}/> <InputRightAddon children={
                        <>
                        <span>m</span>
                        <sup style={{fontSize: "8px"}}>2</sup>
                        </>
                        }/>
                        </InputGroup>
                </FormItem>
            </Flex>
            <Box maxW="620px">
                <Heading as="h3" fontSize="2xl" mt="6">Amenities</Heading>
                <FormItem label="Apartment amenities" width="100%">
                   <CheckBoxGr onChange={handleChangeFormik("ameneties")}>
                        {Ameneties.map((amenetie, idx)=><Checkbox fontFamily="heading" key={idx} value={amenetie}>{amenetie}</Checkbox>)}
                   </CheckBoxGr>
                </FormItem>
                <FormItem label="Building amenities" width="100%">
                    <CheckBoxGr onChange={handleChangeFormik("buildingAmenities")}>
                        {buildingAmenities.map((buildingAmenitie, idx)=><Checkbox fontFamily="heading" key={idx} value={buildingAmenitie}>{buildingAmenitie}</Checkbox>)}
                    </CheckBoxGr>
                </FormItem>
                <FormItem label="Close by" width="100%">
                    <CheckBoxGr onChange={handleChangeFormik("closeBy")}>
                        {closeBy.map((place, idx)=><Checkbox fontFamily="heading" key={idx} value={place}>{place}</Checkbox>)}
                    </CheckBoxGr>
                </FormItem>
                <FormControl mt="4">
                    <Stack isInline>
                        <FormLabel fontWeight="bold">Pets allowed</FormLabel>
                        <Switch
                            color="teal"
                            size="sm"
                            defaultChecked={false}
                            onChange={()=>{formik.values.petsAllowed = !formik.values.petsAllowed}}/>
                    </Stack>
                    <FormHelperText mt="1" width="485px">
                        Allowing pets increases the likehood of renters  liking the property by 9001%.
                        It also makes you a better person.
                    </FormHelperText>
                </FormControl>
            </Box>
            <Box maxW="620px">
                <Heading as="h3" fontSize="2xl" mt="6">About the property</Heading>
                <FormItem label="Description"
                          helperText="Renters will read this first, so highlight any features or important information the apartment has."
                          required
                >
                    <Textarea borderColor={haveError("description") ? "red.300" : "gray.200"} resize="vertical" width="620px" {...formik.getFieldProps("description")}/>
                </FormItem>
                <FormItem
                    label="Photos"
                    helperText="Please include as many photos as possible. Remember to use good lighting"
                    required
                >
                    <UpImages changeImages={handleChangeFormik("images")}/>
                </FormItem>
            </Box>
            <button type="submit">Hola</button>
        </form>
    );
}