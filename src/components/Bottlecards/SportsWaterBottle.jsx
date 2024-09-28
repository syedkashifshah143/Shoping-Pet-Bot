import React from 'react'
import Bottle from '../../assets/w bottle/bottle.jpg'
import Bottle1 from '../../assets/w bottle/bottle1.jpg'
import Bottle3 from '../../assets/w bottle/bottle3.jpg'
import img1 from '../../assets/w bottle/1.jpeg'
import img2 from '../../assets/w bottle/6.jpg'
import img3 from '../../assets/w bottle/7.jpg'
import img4 from '../../assets/w bottle/4.jpeg'
import img5 from '../../assets/w bottle/5.jpg'

const SportsWaterBottle = () => {
    const products =[
        {
            name:"Shield Water Bottle",
            des:"SIGG - Shield Therm- Stainless Steel Insulated Water Bottle - Carbonated Drinks, Leakproof, BPA Free, Recycled, 25, 34Oz",
            price:"Rs: 1,0028.70",
            img: Bottle
        },
        {
            name:"Outdoor Water Bottle",
            des:"Sigg - Outdoor Water Bottle - WMB Traveller 51 Oz - Swiss Made - Carbonated Drinks - Leakproof, Recycled, Carbon Neutral",
            price:"Rs: 8,914.40",
            img: Bottle1
        },
        {
            name:"Sports Water Bottle",
            des:"SIGG - Aluminum Sports Water Bottle Blue - With 3 Stages Sports Cap - Leakproof - Lightweight - BPA Free - 25 Oz",
            price:"Rs: 1,0028.70",
            img: img2
        },
        {
            name:"560ml Water Bottle",
            des:"560ml Water Bottle Wide Mouth Leak-proof PC Unbreakable Lidded Drinking Cup Household Supplies",
            price:"Rs: 4,599",
            img: img1
        },
        {
            name:"2 Liter Water Bottle",
            des:"2 Liter Water Bottle with Straw Female Jug Girls Portable Travel bottles Fitness",
            price:"Rs: 2,084",
            img: img3
        },
        {
            name:"Sports Water Bottle",
            des:"BOTTLE Insulated Water Bottle 64 oz with Straw and Dual-use Lid Half Gallon Water Jug Vacuum Stainless Steel for Workout and Sports Insulated Beer Growler with Handle",
            price:"Rs: 1,0028.70",
            img: Bottle3
        },
        {
            name:"Coffee Cup & Water Bottle",
            des:"Tropical Floral Print 17 oz 500 Ml Double Walled Vacuum Insulated Stainless Steel Water Bottle Vacuum Flask Travel Mug Thermal Coffee Cup",
            price:"Rs: 1,424",
            img: img4
        },
        {
            name:"Cartoon Unicorn Cute Water Bottle",
            des:"500ml Cartoon Unicorn Cute Water Bottle Thermos Stainless Steel Travel Sports Beverage Bottle",
            price:"Rs: 1,999",
            img: img5
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
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SportsWaterBottle
