import React from 'react';

const Addtocard = ({ addcart }) => {
  return (
    <div className="p-4">
      {addcart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        addcart.map((item, index) => (
          <div key={index} className="border-b py-2">
            <h4>{item.name}</h4>
            <p>₹{item.price} × {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Addtocard;
