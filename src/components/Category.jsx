import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { useAppContext } from '../context';
import { Link } from 'react-router-dom';

const Category = () => {
  const { userName, hyper, setHyper } = useAppContext(); // Одна деструктуризация

  const handleSetHyper = (value) => {
    setHyper(value); // Устанавливаем значение hyper
  };

  return (
    <Box align={'center'} bg={'blue.800'} minH={'100dvh'}>
      <Container maxW={'container.md'}>
        <Heading textAlign={'center'} color={'#fff'} p={5}>
          Выберайте тему{' '}
          <Box color={'red.500'} as="span">
            {userName ? userName : 'User'}
          </Box>
        </Heading>
        <Flex
          h={'70dvh'}
          justify={'center'}
          flexDir={'column'}
          gap={5}
          maxW={{ md: '60%', base: '' }}
          mx={'auto'}
        >
          {/* HTML & CSS */}
          <Link to={'/quiz'}>
            <Flex
              bg={'green.500'}
              px={5}
              py={3}
              borderRadius={'20px'}
              color={'white'}
              align={'center'}
              justify={'center'}
              gap={6}
            >
              <Image w={{ md: '120px', base: '80px' }} src={'/icon1.png'} />
              <Box onClick={() => handleSetHyper(true)}> {/* Функция для установки hyper */}
                <Heading fontSize={{ md: '40px', base: '25px' }}>HTML & CSS</Heading>
              </Box>
            </Flex>
          </Link>

          {/* JavaScript */}
          <Link to={'/quiz'}>
            <Flex
              px={5}
              py={3}
              borderRadius={'20px'}
              color={'white'}
              bg={'green.500'}
              align={'center'}
              justify={'center'}
              gap={6}
            >
              <Image w={{ md: '100px', base: '70px' }} src={'/js.webp'} />
              <Box onClick={() => handleSetHyper(false)}> {/* Функция для установки hyper */}
                <Heading fontSize={{ md: '40px', base: '25px' }}>JavaScript</Heading>
              </Box>
            </Flex>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Category;
