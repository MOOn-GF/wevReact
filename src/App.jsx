import React from 'react'
import { Routes,Route } from 'react-router-dom'
import MainPage from './components/PAge/MainPage/MainPage'
import Layout from './components/Layout/Layout'
import Katalog from './components/PAge/Katalog/Katalog'
import KatId from './components/PAge/KatId/KatId'
function App() {
  
  return (
    <>
   
    <Layout>
        <Routes>
      <Route  path='/' element={<MainPage/>}></Route>
      <Route  path='/main' element={<MainPage/>}></Route>
      <Route  path='/katalog' element={<Katalog/>}></Route>
      <Route  path='/katalog/:id' element={<KatId/>}></Route>
      
    </Routes></Layout>
    </>
  )
}

export default App