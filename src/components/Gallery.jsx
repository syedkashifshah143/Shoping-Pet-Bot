import React from 'react'
import WaterBottle from './Bottlecards/WaterBottle'
import SportsWaterBottle from './Bottlecards/SportsWaterBottle'
import JarBottles from './Bottlecards/JarBottles'


const Gallery = () => {
    return(
    <>
    <div className='text-white'>
    <div>
      <h1 className='mt-4 ml-8 text-[30px] font-bold italic hover:not-italic'>Drink Water</h1>
      <WaterBottle/>
    </div>
    <div>
      <h1 className='mt-4 ml-8 text-[30px] font-bold italic hover:not-italic'>Sports Water Bottles</h1>
      <SportsWaterBottle/>
    </div>
    <div>
      <h1 className='mt-4 ml-8 text-[30px] font-bold italic hover:not-italic'>Glass Jar</h1>
      <JarBottles/>
    </div>
    </div>
    </>
  )
}

export default Gallery