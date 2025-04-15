import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import Navbar from './component/Navbar'

function App() {
  

  return (
    <>
      <Box minH={"100vh"}>
        {/* nav */}
        <Navbar/>

        <Routes>
          <Route path='/' element={<><HomePage/></>}></Route>
          <Route path='/create' element={<CreatePage/>}></Route>

        </Routes>
      </Box>
    </>
  )
}

export default App
