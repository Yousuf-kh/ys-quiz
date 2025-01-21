import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import Category from './components/category'

const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Welcome/>}/>
        <Route path={'/category'} element={<Category/>}/>
      </Routes>
    </>
  )
}

export default App
