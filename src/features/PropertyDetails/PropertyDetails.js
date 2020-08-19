import React from "react";
import {Container} from '../../Components/StyleComponents'
import {Box, Flex, List, ListIcon, ListItem, Text} from "@chakra-ui/core";
import AsideComponent from "./AsideComponent";
import ImageSlider from "../../Components/ImageSlider";
import {IoIosBed} from 'react-icons/io';
import {FaBath} from 'react-icons/fa'
import {BsArrowsFullscreen} from 'react-icons/bs'
import {MdPets} from 'react-icons/md'
import Map from "../../Components/Map";

const PageDetailSection = ({children, ...props}) => (
    <Box as="section" width="100%" py="20px" borderTop='1px solid' borderColor="gray.500" {...props}>
        {children}
    </Box>
);

export default function PropertyDetails(){
    return (
        <Container justifyContent="space-between" alignItems="flex-start">
            <Box as="main" width="75%">
                <ImageSlider imageUrls={["https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g","https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY", "https://picsum.photos/id/237/200/300"]}/>
                <Box as={"section"} width="100%" py="20px">
                    <Flex justifyContent="space-between">
                        <Text as="span" color="black" fontSize="3xl" fontWeight="bold" fontFamily="heading">Francisco de Paula Ugarriza 27</Text>
                        <Text as="span" color="black" fontSize="3xl" fontWeight="bold" fontFamily="heading">S/ 1000</Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text as="span" color="gray.500" fontSize="l" fontWeight="bold" fontFamily="heading">Miraflores, Lima</Text>
                        <Text as="span" color="gray.500" fontSize="l" fontWeight="bold" fontFamily="heading">+ S/ 100</Text>
                    </Flex>
                </Box>
                <PageDetailSection display="flex" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Box as={IoIosBed} fontSize="3xl" color="purple.600" marginRight="12px"/>
                        <Text as="span"  color="purple.600" fontSize="2xl" fontFamily="body">2 Bedrooms</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Box as={FaBath} fontSize="3xl" color="purple.600" marginRight="12px"/>
                        <Text as="span"  color="purple.600" fontSize="2xl" fontFamily="body">2 Bathrooms</Text>
                    </Flex>

                    <Flex alignItems="center">
                        <Box as={BsArrowsFullscreen} fontSize="3xl" color="purple.600" marginRight="12px"/>
                        <Text as="span"  color="purple.600" fontSize="2xl" fontFamily="body">60 m2</Text>
                    </Flex>

                    <Flex alignItems="center">
                        <Box as={MdPets} fontSize="3xl" color="purple.600" marginRight="12px"/>
                        <Text as="span"  color="purple.600" fontSize="2xl" fontFamily="body">Pets Allowed</Text>
                    </Flex>
                </PageDetailSection>
                <PageDetailSection>
                    <Text fontFamily="heading" marginBottom="20px" fontSize="xl" color="gray.700" fontWeight="bold">About this place</Text>
                    <Text fontFamily="heading" color="gray.800" lineHeight="body">3 Bedroom/2 Bathroom apartment available for ASAP move-in!<br/>
                        Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave.<br/>
                        The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.</Text>
                </PageDetailSection>
                <PageDetailSection>
                    <Text fontFamily="heading" marginBottom="20px" fontSize="xl" color="gray.700" fontWeight="bold">Amenities</Text>
                    <Box>
                        <Text fontSize="l" color="gray.600" mb="2" fontWeight="bold">Apartment</Text>
                        <List spacing="2">
                            <ListItem><Text as="span" color="teal.300" marginRight="2">•</Text> Washing machine</ListItem>
                            <ListItem><Text as="span" color="teal.300" marginRight="2">•</Text> Washing machine</ListItem>
                        </List>
                    </Box>
                </PageDetailSection>
                <PageDetailSection>
                    <Text fontFamily="heading" marginBottom="20px" fontSize="xl" color="gray.700" fontWeight="bold">Location</Text>
                    <Text as="p" fontFamily="heading" marginBottom="2" fontSize="md" fontWeight="bold" color="gray.500">Francisco de Paula Ugarriza 27, Miraflores, Lima</Text>
                    <Map height="450px" coords={{lat: -12.119743, lng: -77.037245}}/>
                </PageDetailSection>
            </Box>
            <AsideComponent width="23%" textAlign="center"/>
        </Container>
    );
}