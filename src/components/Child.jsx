import { useState } from "react";
import Cart from "./Cart";

const Child = () => {
  const data = [
    { id: 1, name: "T-shirt", price: 499, category: "Clothing" },
    { id: 2, name: "Jeans", price: 899, category: "Clothing" },
    { id: 3, name: "Sneakers", price: 1299, category: "Footwear" },
    { id: 4, name: "Hoodie", price: 699, category: "Clothing" },
    { id: 5, name: "Cap", price: 299, category: "Accessories" },
    { id: 6, name: "Backpack", price: 999, category: "Accessories" },
    { id: 7, name: "Sunglasses", price: 749, category: "Accessories" },
    { id: 8, name: "Watch", price: 1599, category: "Watches" },
    { id: 9, name: "Sandals", price: 499, category: "Footwear" },
    { id: 10, name: "Jacket", price: 1299, category: "Clothing" },
  ];
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [err, seterr] = useState("");
  const addCart = (product) => {
    const index = cart.find((item) => item.id === product.id);
    // console.log(index);

    if (index) {
      const updatedCart = [...cart];
      const item = updatedCart.filter((item) => item.id === index.id);
      item[0].count += 1;
      console.log(item);

      setCart([...cart]);
    } else setCart([...cart, { ...product, count: 1 }]);
  };
  return (
    <div className="p-4">
      <button onClick={() => setShowCart(!showCart)}>cartItems</button>
      {showCart && <Cart cartItems={cart} />}
      <h2 className="text-3xl font-bold mb-6 text-center">Product Catalog</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 p-4"
          >
            <div className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </div>
            <div className="text-sm text-gray-500 mb-1">
              Category: {product.category}
            </div>
            <div className="text-xl font-bold text-indigo-600">
              ₹{product.price}
            </div>
            <button
              onClick={() => addCart(product)}
              className="bg-pink-400 px-2 py-4 cursor-pointer"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Child;
