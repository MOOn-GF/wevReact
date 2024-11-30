import React from 'react'
import { Routes,Route } from 'react-router-dom'
import MainPage from './components/PAge/MainPage/MainPage'
import Nav from './components/Nav/Nav'
function App() {
  return (
    <>
    <Nav></Nav>
        <Routes>
      <Route index path='/main' element={<MainPage/>}></Route>
      
    </Routes>
    </>
  )
}

export default App