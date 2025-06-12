import React from 'react';

const ProductList = ({ Product, handleAddToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
    {Product.map((data, index) => (
      <div key={index} className="border p-4 rounded shadow">
        <img className="w-full h-40 object-cover mb-2" src={data.image} alt={data.name} />
        <h3 className="font-bold">{data.name}</h3>
        <p className="text-gray-600">₹{data.price}</p>
        <button
          className="mt-2 bg-lime-500 hover:bg-lime-600 text-white py-1 px-3 rounded"
          onClick={() => handleAddToCart(data)}
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
);

export default ProductList;
