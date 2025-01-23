import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { htmlCssQuestions } from '../helpers/const';
import { useNavigate } from 'react-router-dom';

const Game = () => {
    const [step, setStep] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (step === htmlCssQuestions.length) {
            navigate('/result');
        }
    }, [step, navigate]);

    const onClickVariant = (i) => {
        setSelectedIndex(i);
    };

    const onClickNext = () => {
        if (selectedIndex !== null) {
            setStep(step + 1);
            setSelectedIndex(null);
        } else {
            alert('Пожалуйста, выберите вариант перед продолжением!');
        }
    };

    const onClickPrev = () => {
        if (step > 0) {
            setStep(step - 1);
            setSelectedIndex(null);
        }
    };

    const percent = Math.round((step / htmlCssQuestions.length) * 100);

    // Проверка: если step больше или равен длине массива, не рендерим вопрос
    if (step >= htmlCssQuestions.length) {
        return null; // Ничего не рендерим, так как сразу сработает useEffect
    }

    const question = htmlCssQuestions[step]; // Получаем текущий вопрос

    return (
        <Box
            bg={'url(https://assets-v2.lottiefiles.com/a/569d9eae-116d-11ee-ade3-df3bcdfa8a46/s4HLgrM1nM.gif)'}
            bgSize={'cover'}
            bgRepeat={'no-repeat'}
            h={'100dvh'}
        >
            <Container maxW={'container.md'}>
                <Flex h={'90dvh'} align={'center'} justify={'center'}>
                    <Box w={{ md: '70%', base: '90%' }} bg={'white'} p={5} borderRadius={'20px'}>
                        <Box w={'full'} h={'4px'} borderRadius={'10px'} bg={'#ccc'}>
                            <Box
                                transition={'.5s'}
                                borderRadius={'10px'}
                                w={`${percent}%`}
                                bg={'green.300'}
                                h={'4px'}
                            ></Box>
                        </Box>

                        <Heading py={4} fontSize={{ md: '2xl', base: 'xl' }}>
                            {question.question}
                        </Heading>

                        {question.options.map((c, i) => (
                            <Text
                                onClick={() => onClickVariant(i)}
                                _focus={{ fontWeight: '900' }}
                                cursor={'pointer'}
                                key={c}
                                mb={2}
                                p={3}
                                border={'1px solid #999'}
                                borderRadius={'10px'}
                                bg={i === selectedIndex ? 'green.100' : 'white'}
                            >
                                {c}
                            </Text>
                        ))}

                        <Flex justify={'space-between'} align={'center'}>
                            <Button onClick={onClickPrev} colorScheme="red" isDisabled={step === 0}>
                                Prev
                            </Button>
                            <Button onClick={onClickNext} colorScheme="green">
                                Next
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Game;
