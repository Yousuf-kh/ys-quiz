import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { htmlCssQuestions } from '../helpers/const'

const Game = () => {

    const [step, setStep] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState(null);
    const question = htmlCssQuestions[step]

    const onClickVariant = (i) => {
        setSelectedIndex(i);
    };

    const onClickNext = () => {
        if (selectedIndex !== null) {
            setStep(step + 1)
            setSelectedIndex(null);
        } else {
            alert("Пожалуйста, выберите вариант перед продолжением!");
        }
    };

    return (
        <Box bg={'url(https://assets-v2.lottiefiles.com/a/569d9eae-116d-11ee-ade3-df3bcdfa8a46/s4HLgrM1nM.gif)'} bgSize={'cover'} bgRepeat={'no-repeat'} h={'100dvh'}>
            <Container maxW={'container.md'}>
                <Flex h={'90dvh'} align={'center'} justify={'center'}>
                    <Box w={{ md: '70%', base: '90%' }} bg={'white'} p={5} borderRadius={'20px'}>
                        <Box w={'full'} h={'4px'} borderRadius={'10px'} bg={'#ccc'}>
                            <Box w={'50%'} bg={'green.300'} h={'4px'}></Box>
                        </Box>

                        <Heading py={4} fontSize={'2xl'}>{question.question}</Heading>

                        {
                            question.options.map((c, i) => (
                                <Text onClick={() => onClickVariant(i)} _focus={{ fontWeight: '900' }} cursor={'pointer'} key={c} mb={2} p={3} border={'1px solid #999'} borderRadius={'10px'} bg={i === selectedIndex ? 'green.100' : 'white'}>{c}</Text>
                            ))
                        }
                        <Flex justify={'space-between'} align={'center'}>
                            <Button colorScheme='red'>Prev</Button>
                            <Button onClick={onClickNext} colorScheme='green'>Next</Button>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Game
