import { useState, useEffect } from "react";

const CartSidebar = ({ cartItems, setCart, setShowCart }) => {
  const [total, setTotal] = useState(0); // For total price calculation

  useEffect(() => {
    let tempTotal = 0;
    cartItems.map((item) => {
      tempTotal += item.price * item.quantity; // Calculate total price
      return null; // To avoid unused return value warning
    });
    setTotal(tempTotal);
  }, [cartItems]);

  const updateQuantity = (index, change) => {
    const updatedCartItems = [...cartItems];
    const newQuantity = updatedCartItems[index].quantity + change; // Calculate new quantity

    if (newQuantity >= 1) {
      updatedCartItems[index].quantity = newQuantity;
      setCart(updatedCartItems); // Update cart items
    
    } else {                                
      updatedCartItems.splice(index, 1);   // Remove item if quantity becomes 0
      setCart(updatedCartItems);
    }
  };

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-800 shadow-lg p-4 overflow-y-auto z-50">
      <button onClick={() => setShowCart(false)} className="mb-4 text-red-500">
        Close
      </button>

      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-cover mr-2"
            />
            <span>{item.name}</span>
            <div className="flex items-center">
              <button
                onClick={() => updateQuantity(index, -1)}
                className="px-2 py-1 bg-white-200 dark:bg-white-700 rounded-l shadow-md"
              >
                -
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(index, 1)}
                className="px-2 py-1 bg-white-200 dark:bg-white-700 rounded-r shadow-md"
              >
                +
              </button>
            </div>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      )}

      <div className="mt-4 font-bold">Total: ₹{total}</div>
    </div>
  );
};

export default CartSidebar;