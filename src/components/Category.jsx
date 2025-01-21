import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { useAppContext } from '../context'

const Category = () => {

  const { userName } = useAppContext()

  return (
    <Box align={'center'} bg={'blue.700'} minH={'100dvh'}>
      <Container maxW={'container.md'}>
        <Heading textAlign={'center'} color={"#fff"} p={5}>Выберайте тему {userName ? userName : 'User'}</Heading>
        <Flex h={'70dvh'} justify={'center'} flexDir={'column'} gap={5} w={'60%'} mx={'auto'}>
          <Flex bg={'green.500'} px={5} py={3} borderRadius={'20px'} color={'white'} align={'center'} justify={'center'} gap={6}>
            <Image w={'120px'} src={'/icon1.png'} />
            <Box>
              <Heading>HTML & CSS</Heading>
            </Box>
          </Flex>

          <Flex px={5} py={3} borderRadius={'20px'} color={'white'} bg={'green.500'} align={'center'} justify={'center'} gap={6}>
            <Image w={'100px'} src={'/js.webp'} />
            <Box>
              <Heading>JavaScript</Heading>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Category
