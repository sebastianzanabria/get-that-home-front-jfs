import React, {useEffect, useRef, useState} from "react";
import {Image, Flex} from "@chakra-ui/core";
import { MainButton as Button } from '../Components/StyleComponents'

const SliderButton = ({left, right, children, onClick})=> {
    const direction = {};
    if (left) direction.left = "15px"
    if (right) direction.right = "15px"
    return(
        <Button
            onClick={onClick}
            borderRadius="100%"
            position="absolute"
            top="50%"
            transform= "translateY(-50%)"
            zIndex="50"
            {...direction}
        >{children}</Button>
    );
}

export default function ImageSlider({imageUrls}){
    const sliderRef = useRef();
    const containerRef = useRef();
    const [width, setWidth] = useState(0);
    const [imgs, setImgs] = useState(imageUrls);

    useEffect(()=>{
        setWidth(containerRef.current.clientWidth);
    }, [containerRef]);

    function handleClickLeft(e){
        const lastImg = sliderRef.current;
        lastImg.style.marginLeft = `-${width}px`;
        const lastUrlImg = imgs.shift();
        setImgs([...imgs, lastUrlImg]);
        lastImg.style.marginLeft = `0`;
    }
    function handleClickRight(e){
        const lastImg = sliderRef.current;
        lastImg.style.marginRight = `-${width}px`;
        const lastUrlImg = imgs.pop();
        setImgs([lastUrlImg, ...imgs]);
        lastImg.style.marginRight = `0`
    }

    return  (
        <Flex width="100%" height="450px" overflow="hidden" position="relative" bg="gray.100" ref={containerRef}>
            { imgs.length === 1 || (
                <>
                <SliderButton left onClick={handleClickLeft}>&lt;</SliderButton>
                <SliderButton right onClick={handleClickRight}>&gt;</SliderButton>
                </>
            ) }
            <Flex height="100%">
                {
                    imgs.map((imgUrl, idx) => idx === 0 ? (
                            <Flex key={idx} justifyContent="center" alignItems="center" width={width} height="100%" ref={sliderRef}>
                                <Image src={imgUrl} alt="Image Property" maxW="100%" maxH="100%"/>
                            </Flex>)
                        : (
                            <Flex key={idx} justifyContent="center" alignItems="center" width={width} height="100%">
                                <Image src={imgUrl} alt="Image Property" maxW="100%" maxH="100%"/>
                            </Flex>
                        ))
                }
            </Flex>
        </Flex>
    );
}