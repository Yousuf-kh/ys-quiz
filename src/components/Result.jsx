import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useAppContext } from '../context';
import { Link } from 'react-router-dom';

const Result = () => {

  const { correct } = useAppContext();

  const [userName, setUserName] = useState(localStorage.getItem('userName') || "");

  return (
    <Flex minH={'100dvh'} flexDir={'column'} bg={'blue.800'} align={'center'} justify={'center'}>
      <Box w={{ md: '50%', base: '70%' }} bg={'gray.300'} textAlign={'center'} borderRadius={'10px'}>
        <Heading p={5}>{userName}</Heading>
        <Image src={'co.png'} />
        <Text fontWeight={'bold'} p={5}>Павильных ответов <q>{correct}</q> из 20 </Text>
      </Box>

      <Link to={'/category'}>
        <Button colorScheme='blue' mt={10}>Refresh</Button>
      </Link>
    </Flex>
  )
}

export default Result
