import React from 'react'
import drinkimg from '../../assets/drink water/3.png';
import jarimg from '../../assets/jar/2.jpg'
import supimg from '../../assets/w bottle/7.jpg'

const ProductsAbout = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6  rounded-lg bg-gray-50">
          <h2 className="text-[36px] font-semibold text-gray-800 mb-4 mt-[20px]">Products</h2>
          <div className="flex flex-1 items-center justify-between w-full">
            <div className="flex-1 mr-6">
              <h3 className="text-[36px] font-semibold text-gray-800">Drink Water</h3>
              <p className="mt-2 text-base text-gray-600 text-[24px]">
                Drinking water is essential for maintaining good health. It helps keep your body hydrated, aids in digestion, and supports overall bodily functions. 
                Make sure to drink enough water throughout the day to stay healthy and energetic.
              </p>
            </div>
            <div className="w-[400px] h-[350px] mt-[50px] bg-white rounded-3xl">
              <img 
                src={drinkimg} 
                alt="Drinking Water" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between w-full">
            <div className="w-[400px] h-[350px] mt-[50px] bg-white rounded-3xl">
              <img 
                src={jarimg} 
                alt="Drinking Water" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="flex-1 mr-6 ml-12">
              <h3 className="text-[36px] font-semibold text-gray-800">Jar Bottle</h3>
              <p className="mt-2 text-base text-gray-600 text-[24px]">
                A jar bottle is a versatile and practical container for storing beverages and other liquids. Typically made of glass or high-quality plastic, jar bottles are designed to be durable and easy to clean. They often feature a screw-on or flip-top lid to ensure a secure seal and prevent spills. Ideal for daily use, they are perfect for carrying water, juices, or homemade beverages, and are a great eco-friendly alternative to single-use plastic bottles. Many jar bottles also come with measurements or markings to help you track your liquid intake.
                </p>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between w-full">
            <div className="flex-1 mr-6">
              <h3 className="text-[36px] font-semibold text-gray-800">Sports Water Bottle</h3>
              <p className="mt-2 text-base text-gray-600 text-[24px]">
        The Sports Water Bottle is designed for athletes and active individuals who need a reliable hydration solution. Made from durable, BPA-free plastic or stainless steel, it features a leak-proof lid and a convenient one-handed flip-top or screw cap for quick access during workouts. The ergonomic design ensures a comfortable grip, and many models include a built-in carrying handle or loop for easy transport. The bottle's wide mouth allows for easy cleaning and can accommodate ice cubes or fruit infusions. Ideal for running, cycling, or gym sessions, this bottle helps you stay hydrated and perform at your best.
      </p>
            </div>
            <div className="w-[400px] h-[350px] mt-[50px] bg-white rounded-3xl">
              <img 
                src={supimg} 
                alt="Drinking Water" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      );
    };

export default ProductsAbout