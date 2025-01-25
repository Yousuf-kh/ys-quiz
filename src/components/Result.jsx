import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAppContext } from '../context';
import { Link } from 'react-router-dom';
import { htmlCssQuestions, javascriptQuestions } from '../helpers/const';

const Result = () => {
  const { correct, hyper, sendMessageToTelegram, setMessage, userName, setUserName } = useAppContext();

  // Получаем вопросы в зависимости от категории
  const questions = hyper ? htmlCssQuestions : javascriptQuestions;

  // Получаем userName из localStorage
  useEffect(() => {
    const storedUserName = localStorage.getItem('userName') || "";
    setUserName(storedUserName); // Обновляем userName в контексте

    // Обновляем сообщение в контексте
    const updatedMessage = `user: ${storedUserName},\ category: ${hyper ? 'HTML & CSS' : 'JavaScript'},\ correct: ${correct}`;
    setMessage(updatedMessage);

    // Отправляем сообщение в Telegram
    sendMessageToTelegram();
  }, [correct, hyper, setMessage, sendMessageToTelegram, setUserName]); // Добавляем зависимости

  return (
    <Flex minH={'100dvh'} flexDir={'column'} bg={'blue.800'} align={'center'} justify={'center'}>
      <Box w={{ md: '50%', base: '70%' }} bg={'gray.300'} textAlign={'center'} borderRadius={'10px'}>
        <Heading p={5}>{userName}</Heading>
        <Image src={'co.png'} mx={'auto'} />
        <Text fontWeight={'bold'} p={5}>
          Правильных ответов <q>{correct}</q> из {questions.length}
        </Text>
      </Box>

      <Link to={'/category'}>
        <Button colorScheme="blue" mt={10}>
          Refresh
        </Button>
      </Link>
    </Flex>
  );
};

export default Result;
