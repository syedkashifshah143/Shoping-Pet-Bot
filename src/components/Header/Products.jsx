import React from 'react';
import Bottle from '../../assets/w bottle/bottle.jpg'
import { Link } from 'react-router-dom';
import jarimg from '../../assets/jar/1.jpeg';
import drinkimg2 from '../../assets/drink water/2.png'
import jarimg1 from '../../assets/jar/2.jpg'
import jarimg2 from '../../assets/jar/6.jpg'
import wbottle from '../../assets/w bottle/4.jpeg'
import supimg from '../../assets/w bottle/6.jpg'
import supimg1 from '../../assets/w bottle/7.jpg'


const Products = () => {
    const productsItem =[
        {
            tex: "Enjoy ",
            tex1: "With",
            name: "Sport Water Bottle",
            img: Bottle,
            btnText: "Browse",
            btnLink: "/sportswater"
        },
        {
            tex: "Enjoy ",
            tex1: "With",
            name: "Jar Bottle",
            img: jarimg1,
            btnText: "Browse",
            btnLink: "/jarbottle"
        },
       
        {
            tex: "Enjoy ",
            tex1: "With",
            name: "Drink Water Bottle",
            img: drinkimg2,
            btnText: "Browse",
            btnLink: "/drinkwater"
        },
        {
            tex: "Enjoy ",
            tex1: "With",
            name: "Sport Water Bottle",
            img: supimg,
            btnText: "Browse",
            btnLink: "/sportswater"
        },
        {
            tex: "Enjoy ",
            tex1: "With",
            name: "Jar Water Bottle",
            img: jarimg,
            btnText: "Browse",
            btnLink: "/jarbottle"
        },
        {
            tex: "Enjoy ",
            tex1: "With",
            name: "Jar Water Bottle",
            img: jarimg2,
            btnText: "Browse",
            btnLink: "/jarbottle"
        },
        {
            tex: "Enjoy ",
            tex1: "With",
            name: "Water Bottle",
            img: wbottle,
            btnText: "Browse",
            btnLink: "/drinkwater"
        },
        {
            tex: "Enjoy ",
            tex1: "With",
            name: "Sport Water Bottle",
            img: supimg1,
            btnText: "Browse",
            btnLink: "/sportswater"
        },
    ]
    return (
        <div className="grid lg:grid-cols-4 gap-6 p-4">
            {productsItem.map((product) => (
                <div key={product.name} className="relative bg-slate-200 p-4 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="relative">
                        <img src={product.img} className="w-full h-64 object-cover rounded-lg" alt={product.name} />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                            <p className="text-sm text-white mt-2 text-center">{product.tex}</p>
                            <h4 className="mt-2 text-lg font-semibold text-white">{product.tex1}</h4>
                            <h2 className="text-xl font-semibold text-white">{product.name}</h2>
                            <Link to={product.btnLink}><button className="px-6 py-2 mt-4 bg-blue-600 text-white rounded-lg shadow">{product.btnText}</button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
