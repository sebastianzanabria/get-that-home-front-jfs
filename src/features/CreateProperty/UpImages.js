import React, {useState} from "react";
import {Box, CloseButton, PseudoBox} from "@chakra-ui/core";
import {IconPlus} from "../../Components/Icons";
import styled from "@emotion/styled";
import {nanoid} from "nanoid";

const PreviewContainer = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    overflow: auto;
    margin-top: 8px;
    height: 148px;
    width: 620px;
`;
const Image = styled.div`
    margin-right: 8px;
    min-width: 200px;
    height: 148px;
    display: inline-block;
    background-size: cover;
    background-image: url(${props => URL.createObjectURL(props.image)});
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
`;

export default function UpImages({changeImages}){
    const [images, setImages] = useState([]);
    function handleChange(e){
        const imagesInput = e.target;
        const  imagesUp = [];
        for(let i = 0; i<imagesInput.files.length; i++){
            imagesUp.push({
                id: nanoid(7),
                file: imagesInput.files[i]
            })
        }
        setImages([...images, ...imagesUp])
        changeImages([...images.map((item)=>item.file), ...imagesUp.map((item)=>item.file)]);
        imagesInput.value = null;
    }

    function handleDelete(imageId){
        const newImages = images.filter((image)=> image.id !== imageId)
        setImages([...newImages]);
        changeImages([...newImages.map((item)=>item.file)]);
    }

    return(
        <Box>
        <input onChange={handleChange} type="file" name="images" id="images" multiple style={{display: "none"}}/>
        <PseudoBox
            as="label"
            htmlFor="images"
            border="1px"
            borderColor="teal.300"
            color="teal.300"
            rounded="md"
            cursor="pointer"
            fontWeight="bold"
            style={{
                display: "inline-flex",
                alignItems: "center"
            }}
            fontFamily="heading"
            py={2}
            px={4}
            _hover={{ borderColor: "teal.400", color: "teal.400" }}
        >
            Add photo
            <IconPlus ml="9px"/>
        </PseudoBox>
            <PreviewContainer>
                {images.map((image)=>
                    <Image key={image.id} image={image.file}>
                        <CloseButton onClick={()=> {handleDelete(image.id)}} position="absolute" top="4px" right="4px" size="sm" bg="white" rounded="100%"/>
                    </Image>
                )}
            </PreviewContainer>
        </Box>
    );
}