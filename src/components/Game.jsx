import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Game = () => {
    return (
        <Box bg={'url(https://assets-v2.lottiefiles.com/a/569d9eae-116d-11ee-ade3-df3bcdfa8a46/s4HLgrM1nM.gif)'} bgSize={'cover'} bgRepeat={'no-repeat'} h={'100dvh'}>
            <Container maxW={'container.md'}>
                <Flex h={'90dvh'} align={'center'} justify={'center'}>
                    <Box w={{md:'70%',base:'90%'}} bg={'white'} p={5} borderRadius={'20px'}>
                        <Box w={'full'} h={'4px'} borderRadius={'10px'} bg={'#ccc'}>
                            <Box w={'50%'} bg={'green.300'} h={'4px'}></Box>
                        </Box>

                        <Heading py={4} fontSize={'2xl'}>Что такое HTML ?</Heading>

                        <Text mb={2} p={3} border={'1px solid #999'} borderRadius={'10px'}>Lorem ipsum dolor sit amet.</Text>

                        <Text mb={2} p={3} border={'1px solid #999'} borderRadius={'10px'}>Lorem ipsum dolor sit amet.</Text>

                        <Text mb={2} p={3} border={'1px solid #999'} borderRadius={'10px'}>Lorem ipsum dolor sit amet.</Text>

                        <Text mb={2} p={3} border={'1px solid #999'} borderRadius={'10px'}>Lorem ipsum dolor sit amet.</Text>
                        
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Game
