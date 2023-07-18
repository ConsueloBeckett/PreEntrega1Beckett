import React from "react";
import { useState } from "react";
import { VscArrowCircleUp, VscArrowCircleDown } from "react-icons/vsc";
import { FaCartPlus } from "react-icons/fa";
import { Box } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';


const ItemCount = ({stock, initial, onAdd })=> {
    const [quantity, setQuanitity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuanitity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuanitity(quantity- 1)
        }
    }

    return(

        <Container  maxW='md' bg='#FAF5FF' centerContent >
            <Box padding={4} maxW='md'>
            <Box as='button' borderRadius='md' bg='teal' color='black' px={4} h={8} onClick={increment}>
                <VscArrowCircleUp/></Box>
                <Box as='button' borderRadius='md' bg='gray' color='white' px={4} h={8} >{quantity}</Box>
                <Box as='button' borderRadius='md' bg='teal' color='black' px={4} h={8} onClick={decrement}>
                <VscArrowCircleDown/></Box>
            </Box>
            <Container centerContent>
                <Box as='button' borderRadius='md' bg='teal' color='white' px={5} h={10} onClick={() => onAdd(quantity)} disabled={!stock} >Add <FaCartPlus/></Box>
            </Container>
        </Container>



    )



}

export {ItemCount};