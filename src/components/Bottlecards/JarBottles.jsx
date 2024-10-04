import React from 'react'
import jar1 from '../../assets/jar/1.jpeg'
import jar2 from '../../assets/jar/2.jpg'
import jar3 from '../../assets/jar/3.jpg'
import jar4 from '../../assets/jar/4.jpg'
import jar5 from '../../assets/jar/5.jpg'
import jar6 from '../../assets/jar/6.jpg'
import jar7 from '../../assets/jar/7.jfif'
import jar8 from '../../assets/jar/9.jpg'
import { Link } from 'react-router-dom'

const JarBottles = () => {
    const products =[
        {
            name:"Glass Jars",
            des:"Pack of 2 Glass Jars",
            price:"Rs: 1,415",
            img: jar1
        },
        {
            name:"Glass Storage Jars",
            des:"Glass Storage Jar Airtight Jar, Decorative Tea Storage Container Glass Canisters for Candy, Loose Tea, Sugar, Spice",
            price:"Rs: 6,230",
            img: jar2
        },
        {
            name:"Glass Storage Jars",
            des:"Glass Storage Jars with Bamboo Lids Cereal Dispenser Storage Bottles High Capacity Glass Containers for Food Spices Candy Jar",
            price:"Rs: 3,999",
            img: jar3
        },
        {
            name:"IKEA KORKEN Glass Jar",
            des:"IKEA KORKEN Glass Jar with Air tight lid (rubber seal), 1 Liter – 1000 ML - High quality Food Storage Container with sealed Lid for Loose Tea Sugar Rice & Pickle",
            price:"Rs: 1,899",
            img: jar4
        },
        {
            name:"Square Jar, Mayson Jars",
            des:"Square Jar, Mayson Jars, Spice jar, Honey Jar, Jam Jar, Glass Jar, Glass Bottle, Available domestic and commercial use also",
            price:"Rs: 1,450",
            img: jar5
        },
        {
            name:"Luminarc Glass Jars",
            des:"Luminarc Glass Jars - 1000 ml, 750 ml, 500 ml, Set of 3, Multicolor",
            price:"Rs: 3,444",
            img: jar6
        },
        {
            name:"Cork Lead-Free Glass Jars",
            des:"(Pack Of 4) Cork Lead-Free Glass Jar With Lid Bottle Storage Airtight Canister",
            price:"Rs: 7,124",
            img: jar7
        },
        {
            name:"MEGNETON Megnetons Jar Bottle",
            des:"MEGNETON Megnetons Jar Bottle with Handle, Colored Cap Lid & Straw for Juice / Cocktail / Mocktail Glass Mason Jar",
            price:"Rs: 5,124",
            img: jar8
        },
    ]
    return (
        <div className="grid lg:grid-cols-4 gap-6 p-4">
            {products.map((product) => (
                <div key={product.name} className="relative bg-slate-200 p-4 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="relative">
                        <img src={product.img} className="w-full h-64 object-cover rounded-lg" alt={product.name} />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                            <h2 className="text-xl font-semibold text-white">{product.name}</h2>
                            <p className="text-sm text-white mt-2 text-center">{product.des}</p>
                            <h4 className="mt-2 text-lg font-semibold text-white">{product.price}</h4>
                           <Link to='/addtocart'><button 
                                onClick={() => addToCart(product)}
                                className="mt-2 px-4 py-2 bg-yellow-400 text-black rounded-lg"
                            >
                                Add to Cart
                            </button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default JarBottles