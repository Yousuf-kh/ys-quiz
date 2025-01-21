import { Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context'

const Welcome = () => {

    const { userName, setUserName } = useAppContext()

    let navigate = useNavigate();


    document.addEventListener('keyup', (e) => {
        if (e.code == "Enter" && userName.length > 4) {
            navigate('/category')
        }
    })




    return (
        <Box bg={'blue.800'} minH={'100dvh'}>
            <Container maxW={'container.md'} p={5}>
                <Heading color={'#fff'} textAlign={'center'}>Опросник по Веб-программированию</Heading>
                <Text textAlign={'center'} fontWeight={'500'} color={'red.500'}>Чтобы продолжить <Box as={'span'} textDecor={'underline'}>обязательно</Box> введите имя <Box as={'span'} fontSize={'2xl'}>!</Box></Text>

                <Flex h={'70dvh'} align={'center'} gap={5}>
                    <Input onChange={(e) => { setUserName(e.target.value) }} bg={'white'} placeholder={'Введите Имя'} />
                    {
                        userName.length > 4 && (
                            <Link to={'/category'}>
                                <Button _hover={{ bg: 'green.700' }} display={'flex'} justifyContent={'center'} alignItems={'center'} color={'#fff'} bg={'green.500'}>Дальше</Button>
                            </Link>
                        )
                    }
                </Flex>
            </Container>
        </Box>
    )
}

export default Welcome
