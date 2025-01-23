import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { htmlCssQuestions, javascriptQuestions } from '../helpers/const';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context';

const Game = () => {
    const [step, setStep] = useState(0);
    // const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate();
    const { hyper, correct, setCorrect } = useAppContext();

    const questions = hyper ? htmlCssQuestions : javascriptQuestions; // Выбор массива вопросов
    const question = questions[step]; // Текущий вопрос

    useEffect(() => {
        if (step === questions.length) {
            navigate('/result'); // Переход на страницу результатов
        }
    }, [step, navigate, questions.length]);

    const onClickVariant = (c, i) => {
        // setSelectedIndex(i);
        console.log(i, step);
        setStep(step + 1);
        if (c == question.answer) {
            setCorrect(correct + 1)
        }
    };

    // const onClickNext = () => {
    //     if (selectedIndex !== null) {

    //         setSelectedIndex(null);
    //     } else {
    //         alert('Пожалуйста, выберите вариант перед продолжением!');
    //     }
    // };

    // const onClickPrev = () => {
    //     if (step > 0) {
    //         setStep(step - 1);
    //         setSelectedIndex(null);
    //     }
    // };

    const percent = Math.round((step / questions.length) * 100); // Процент выполнения

    // Проверка: если step больше или равен длине массива, не рендерим вопрос
    if (step >= questions.length) {
        return null; // Ничего не рендерим, так как сразу сработает useEffect
    }




    return (
        <Box
            bg={'blue.800'}
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
                                onClick={() => onClickVariant(c, i)}
                                _focus={{ fontWeight: '900' }}
                                cursor={'pointer'}
                                key={c}
                                mb={2}
                                p={3}
                                border={'1px solid #999'}
                                borderRadius={'10px'}
                            // bg={i === selectedIndex ? 'green.100' : 'white'}
                            >
                                {c}
                            </Text>
                        ))}

                        {/* <Flex justify={'space-between'} align={'center'}>
                            <Button onClick={onClickPrev} colorScheme="red" isDisabled={step === 0}>
                                Prev
                            </Button>
                            <Button onClick={onClickNext} colorScheme="green">
                                Next
                            </Button>
                        </Flex> */}
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Game;
