import React from 'react';
import drinkimg1 from '../../assets/drink water/1.jpg'

const AddToCart = () => {
  return (
    <div className="flex p-6 max-w-full mx-auto shadow-lg">
      <div className="flex-shrink-0 w-1/3">
        <img src={drinkimg1} alt="Product" className="w-full h-auto object-cover rounded-lg"/>
      </div>

      <div className="flex-1 ml-6">
        <h2 className="text-2xl font-bold mb-2">Product Name</h2>
        <p className="text-gray-700 mb-4">Here goes a brief description of the product. It provides key details and highlights of the item.</p>
        <p className="text-xl font-semibold mb-4">$99.99</p>
        
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Add to Cart</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
