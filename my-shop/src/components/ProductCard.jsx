const ProductCard = ({ product, addToCart }) => (
  <div className="w-65 bg-white rounded-2xl shadow-md overflow-hidden text-black hover:shadow-lg transition-all duration-300">
    
    <img
      src={product.image}
      alt={product.name}
      className="w-full object-cover"
      style={{height:'250px'}}
    />

    <div className="p-4">
      <h2 className="text-xl font-bold text-black">
        {product.name}
      </h2>

      <p className="text-sm text-black mb-2">
        ₹{product.price}
      </p>
      <p className="text-sm text-black mb-2">
        {product.description}
      </p>
      <button
        onClick={() => addToCart(product)}
        className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
       Add to Cart
      </button>
    </div>
  </div>
);

export default ProductCard;

