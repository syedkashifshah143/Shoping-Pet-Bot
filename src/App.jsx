import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/Home/ThemeContext'; // Adjust the path as needed
import Navbar from './components/Home/Navbar';
import Home from './components/Home/Home';
import About from './components/Home/Abouts';
import Gallery from './components/Gallery';
import Queries from './components/Home/Queries';
import Feedback from './components/Home/FeedBack';
import Contact from './components/Home/Contact';
import WaterBottle from './components/Bottlecards/WaterBottle';
import SportsWaterBottle from './components/Bottlecards/SportsWaterBottle';
import JarBottles from './components/Bottlecards/JarBottles';
import AddToCart from './components/Bottlecards/AddToCart';
import Footer from './components/Home/Footer';
import Login from './components/Loging/login';
import Register from './components/Loging/Registration ';
import ForgotPassword from './components/Loging/ForgotPassword';
import './index.css'

const App = () => {
  return (
    <ThemeProvider>
      <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 pt-[90px]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/queries' element={<Queries />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/drinkwater' element={<WaterBottle />} />
          <Route path='/sportswater' element={<SportsWaterBottle />} />
          <Route path='/jarbottle' element={<JarBottles />} />
          <Route path='/addtocart' element={<AddToCart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
