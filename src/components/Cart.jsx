const Cart = ({ cartItems }) => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <p>Cart Items</p>
      {cartItems?.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl shadow-md p-4 bg-white"
        >
          <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
          <p className="text-gray-600">Category: {item.category}</p>
          <p className="text-gray-700 font-medium">₹{item.price}</p>
          <span>{item?.count}</span>
        </div>
      ))}
    </div>
  );
};

export default Cart;
