import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import MainPage from './components/PAge/MainPage/MainPage'
import Layout from './components/Layout/Layout'
import Katalog from './components/PAge/Katalog/Katalog'
import KatId from './components/PAge/KatId/KatId'
import About from './components/PAge/About/About'
import Info from './components/PAge/About/Info/Info'
import Number from './components/PAge/About/Number/Number'
import Adress from './components/PAge/About/Adress/Adress'
import Error from './components/PAge/Error/Error'
function App() {
  return (
    <>
   
    <Layout>
        <Routes>
      <Route  path='/' element={<MainPage/>}></Route>
      <Route  path='/main' element={<MainPage/>}></Route>
      <Route  path='/katalog' element={<Katalog/>}></Route>
      <Route  path='/katalog/:id' element={<KatId/>}></Route>
      <Route path='/about' element={<About/>}>
        <Route path="info" element={<Info/>}/>
        <Route path="number" element={<Number/>}/>
        <Route path="adress" element={<Adress/>}/>
      </Route>
      <Route path='/404' element={<Error/>}></Route>
      <Route path='/*' element={<Navigate to="/404" replace/>}></Route>
    
    </Routes></Layout>
    
    
    </>
  )
}

export default App