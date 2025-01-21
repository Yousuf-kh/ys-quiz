import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import Category from './components/Category'
import Game from './components/Game'
import Result from './components/Result'

const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Welcome/>}/>
        <Route path={'/category'} element={<Category/>}/>
        <Route path={'/quiz'} element={<Game/>}/>
        <Route path={'/result'} element={<Result/>}/>
      </Routes>
    </>
  )
}

export default App
