const ProductCard = ({ product, addToCart }) => {
  const products = [
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
  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-700">
      {/* <h2 className="text-lg font-semibold">{product.name}</h2> */}
      <h2 className="text-lg font-semibold">Product 1</h2>
      <p className="text-sm mb-2">Price: ₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="px-3 py-1 bg-green-600 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
