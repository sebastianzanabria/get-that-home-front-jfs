import React from "react";
import { Box, Text,} from "@chakra-ui/core";
import {MainButton} from '../../Components/StyleComponents'
import {EmptyHeart, Heart} from "../../Components/Icons";
import {useHistory} from 'react-router-dom'
export default function AsideComponent({propertyDetails , ...props}){
    const user = {
        token: "1234"
    }
    const history = useHistory();

    const own = propertyDetails.own;

    const handleClickLogin = (e) => {history.push('/login')}

    const UserLogged = ()=>(
        <>
            <MainButton fontFamily="Helvetica">Contact advertiser</MainButton>
            <Text mt="12px" color="teal.500" fontFamily="heading">
                Favorited
                {propertyDetails.favorited
                    ? (<Heart/>)
                    : (<EmptyHeart/>)}
            </Text>
        </>
    );

    const UserContacted = () => {
        const TitleText = ({children}) => (
            <Text color="black" fontFamily="heading" fontWeight="bold" fontSize="16px" mb="8px">
                {children}
            </Text>
        )

        const BoxItem = ({cat, content})=>(
            <Text color="black" fontWeight="bold"fontFamily="heading" fontSize="14px" textAlign="start">
                    {cat}:&nbsp;
                    <Text as="span" fontWeight="normal">
                        {content}
                    </Text>
            </Text>
        );

        return (
            <>
                <TitleText>Contact information</TitleText>
                <BoxItem cat="Email" content={own.email}/>
                <BoxItem cat="Phone number" content={own.phoneNumber}/>
            </>
        );
    }

    const UserDisconnected = () => (
        <>
            <Text fontFamily="heading" fontWeight="300" fontSize="lg" color="black">
              Log in or Join to contact the advertiser
            </Text>
            <MainButton
                mt="12px"
                fontFamily="heading"
                fontWeight="normal"
                onClick={handleClickLogin}
            >Login</MainButton>
        </>
    );
    const ContentSelector = () =>  {
        if (!user.username) return <UserDisconnected/>
        if (propertyDetails.contacted) return <UserContacted/>
        if (own.username !== user.username) return <UserLogged/>
    };

    return (
        <Box as="aside" boxShadow="md" px="20px" py="24px" {...props}>
            <ContentSelector/>
        </Box>
    );
}