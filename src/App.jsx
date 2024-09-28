import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Home/Navbar'
import Home from './components/Home/Home'
import About from './components/Home/Abouts'
import Gallery from './components/Gallery'
import Queries from './components/Home/Queries'
import Feedback from './components/Home/FeedBack'
import Contact from './components/Home/Contact'
import WaterBottle from './components/Bottlecards/WaterBottle'
import SportsWaterBottle from './components/Bottlecards/SportsWaterBottle'
import JarBottles from './components/Bottlecards/JarBottles'
import AddToCart from './components/Bottlecards/AddToCart'
import Footer from './components/Home/Footer'

const App = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 pt-[100px]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/gallery'element={<Gallery/>}/>
        <Route path='/queries'element={<Queries/>}/>
        <Route path='/feedback'element={<Feedback/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/drinkwater'element={<WaterBottle/>}/>
        <Route path='/sportswater'element={<SportsWaterBottle/>}/>
        <Route path='/jarbottle'element={<JarBottles/>}/>
        <Route path='/addtocart'element={<AddToCart/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App