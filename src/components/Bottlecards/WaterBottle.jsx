import React from 'react'
import drinkimg1 from '../../assets/drink water/1.jpg'
import drinkimg2 from '../../assets/drink water/2.png'
import drinkimg3 from '../../assets/drink water/3.png'
import drinkimg4 from '../../assets/drink water/4.jpg'
import drinkimg5 from '../../assets/drink water/5.jpg'
import drinkimg6 from '../../assets/drink water/6.jpeg'
import drinkimg7 from '../../assets/drink water/7.jpeg'
import drinkimg8 from '../../assets/drink water/avif.avif'

const WaterBottle = () => {
    const products =[
        {
            name:"Mineral Water Bottles",
            des:"Mineral Water Bottles - Soft Drink Water Bottle",
            price:"Rs: 100",
            img: drinkimg1
        },
        {
            name:"Mineral Water Bottles",
            des:"20 LTR DRINKING WATER BOTTLE",
            price:"Rs: 70",
            img: drinkimg2
        },
        {
            name:"Mineral Water Bottles",
            des:"Mineral Water Bottles - Soft Drink Water Bottle",
            price:"Rs: 100",
            img: drinkimg3
        },
        {
            name:"Mineral Water Bottles",
            des:"Mineral Water Bottles - Soft Drink Water Bottle",
            price:"Rs: 100",
            img: drinkimg4
        },
        {
            name:"Mineral Water Bottles",
            des:"Mineral Water Bottles - Soft Drink Water Bottle",
            price:"Rs: 100",
            img: drinkimg5
        },
        {
            name:"Mineral Water Bottles",
            des:"Mineral Water Bottles - Soft Drink Water Bottle",
            price:"Rs: 100",
            img: drinkimg6
        },
        {
            name:"Mineral Water Bottles",
            des:"Mineral Water Bottles - Soft Drink Water Bottle",
            price:"Rs: 100",
            img: drinkimg7
        },
        {
            name:"Mineral Water Bottles",
            des:"Mineral Water Bottles - Soft Drink Water Bottle",
            price:"Rs: 100",
            img: drinkimg8
        },
        
    ]
    return (
        <div className="grid lg:grid-cols-4 gap-6 p-4">
            {products.map((product) => (
                <div key={product.name} className="relative bg-slate-200 p-4 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="relative">
                        <img src={product.img} className="bg-white w-full h-64 object-cover rounded-lg" alt={product.name} />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                            <h2 className="text-xl font-semibold text-white">{product.name}</h2>
                            <p className="text-sm text-white mt-2 text-center">{product.des}</p>
                            <h4 className="mt-2 text-lg font-semibold text-white">{product.price}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WaterBottle
