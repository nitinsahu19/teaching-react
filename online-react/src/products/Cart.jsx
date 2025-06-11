// Cart.jsx
import React from "react";

const Cart = ({ cart, theme }) => {

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={` absolute top-20 cartmain ${cart ? "show" : ""}`}>
      <h3 className={`text-xl font-bold mb-2 ${theme ? "text-black" : "text-blue-400"}`}>
        Cart Items: {cart.length}
      </h3>




        {cart.length === 0 ? (
        <div className="flex justify-center text-center">
          <div className={`${theme ? "bg-white " : "bg-black"}`}>
            <img
              width={200}
              src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
              alt=""
            />
            <p>Your cart is empty!</p>
            <p className="pb-1">
              <small>Add items to it now.</small>
            </p>
            <button className="bg-blue-500 rounded p-1">Shop Now</button>
          </div>
        </div>
      ) : (
        cart.map((item, i) => (
          <div
            key={i}
            className={`mb-2 p-2 main-inner w-[100%] ${theme ? "bg-white border-2 " : "bg-black border-2"} `}
          >
            <p className="font-semibold">{item.Name}</p>
            <img src={item.image} alt={item.Name} />
            <p>₹{item.price}</p>
            <p>Quantity = {item.quantity}</p>
            <button className="bg-cyan-950 text-amber-50 ps-2 pe-2 p-1 rounded">
              Remove Item
            </button>
          </div>
        ))



      )}

              {cart.length > 0 && (
  <div className={`mt-4 font-bold text-lg border-2 p-2 ${theme ? " bg-white text-black" : "bg-black text-white"}`}>
    Total Price: ₹{totalPrice}
  </div>
)}

    </div>
  );
};

export default Cart;
