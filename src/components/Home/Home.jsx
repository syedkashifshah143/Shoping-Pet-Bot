import React from 'react'
import ProductsAbout from '../Header/ProductsAbout'
import Header from '../Header/Header'
import Products from '../Header/Products'

const Home = () => {
  return (
    <div>
        <Header/>
        <ProductsAbout/>
        <div>
            <h1 className='mt-4 ml-8 text-[30px] font-bold italic hover:not-italic'>Products Item</h1>
            <Products/>
        </div>
    </div>
  )
}

export default Home