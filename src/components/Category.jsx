import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { useAppContext } from '../context';
import { Link, useNavigate } from 'react-router-dom';

const Category = () => {
  const { userName, hyper, setHyper } = useAppContext(); // Деструктурируем данные из контекста

  const handleSetHyper = (value) => {
    setHyper(value); // Устанавливаем значение hyper
  };

  let navigate = useNavigate();


  return (
    <Box align={'center'} bg={'blue.800'} minH={'100dvh'}>
      <Container maxW={'container.md'}>
        <Heading textAlign={'center'} color={'#fff'} p={5}>
          Выберите тему{' '}
          <Box color={'red.500'} as="span">
            {userName ? userName : navigate('/category')}
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
          <Box onClick={() => { handleSetHyper(true); }} as={Link} to={'/quiz'}>
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
              <Heading fontSize={{ md: '40px', base: '25px' }}>HTML & CSS</Heading>
            </Flex>
          </Box>

          {/* JavaScript */}
          <Box onClick={() => { handleSetHyper(false); }} as={Link} to={'/quiz'}>
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
              <Heading fontSize={{ md: '40px', base: '25px' }}>JavaScript</Heading>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Category;
