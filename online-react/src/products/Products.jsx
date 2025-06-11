import { useState } from "react";
import { products } from "../data/products";
import "./products.css";
import Login from "./Login";
import "./theme.css"
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";



const Products = () => {
  const [cart, setCart] = useState([]); 

  const [showCart, setShowCart] = useState(false); 
  const [logout, setlogout] = useState(false)
  const [theme, setTheme] = useState(true);
  const navigate = useNavigate()


  const themechange = () => {
    setTheme(!theme)
  }
  const lgout = () => {
    setlogout(true)
    navigate("/login")
  }


  const handleAddCart = (product) => {
  console.log("Adding product:", product);

  const index = cart.findIndex((item) => product.id === item.id);
  console.log("Product found at index:", index);

  if(index === -1){
    console.log("➕ Product not in cart. Adding new with quantity 1.");
    const newCart = [...cart , {...product , quantity : 1}]
    console.log("🛒 New Cart:", newCart);
    setCart(newCart)

    
  }


  else{
    console.log("Product already in cart. Increasing quantity.");
    const updateCart = [...cart]
    updateCart[index].quantity += 1
    console.log("🛒 Updated Cart:", updateCart);
    setCart(updateCart)

  }
};


  return logout ? (<Login />) : (
    <div className={`${theme ? "light-theme" : "dark-theme"}`}>
    {showCart && <Cart cart={cart} theme={theme} />}
      <div className={` mb-2 ${theme ? "bg-white" : "bg-black text-white"} flex items-center p-3 border-2 rounded justify-evenly flex-wrap  `}>
        <h1 className="text-2xl font-bold">🛒 E-commerce</h1>
        <span>
          <input id="inputid" type="email" className={`form-control border-2 lg:w-96 p-1 rounded focus:bg-gray-200 ${theme ? "bg-white text-black " : "bg-black text-white"} `} placeholder="Search here" />
          <button className={`ps-3 pe-3 p-1 rounded m-2 border-2 focus:bg-gray-300 ${theme ? "bg-white" : "bg-black"} `}>Search</button>
        </span>

        <span>


          <button onClick={themechange} className={`ps-3 pe-3 p-1 rounded m-2 border-2 focus:bg-gray-300 ${theme ? "bg-white" : "bg-black"} `}>{theme ? "Dark mode 🌙" : "Light mode 🔆"}</button>
          <span className="relative">
            <button onClick={() => setShowCart(!showCart)} className={`ps-3 pe-3 p-1 rounded m-2 border-2 focus:bg-gray-300 ${theme ? "bg-white" : "bg-black"} `} > Cart</button>
            <span className={`absolute right-0 text-xs font-medium p-1 rounded-xs ${theme ? "bg-black text-white" : "bg-white text-black"} `}>{cart.length}</span>
          </span>

          <button onClick={lgout} className={`ps-3 pe-3 p-1 rounded m-2 border-2 focus:bg-gray-300 ${theme ? "bg-white" : "bg-black"} `}>LogOut</button>


        </span>
      </div>



      {/* Product Grid */}
      <div className="main m-2 mt-0  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded p-4 border-2 ">
        {products.map((product) => (
          <div className="main-inner shadow-2xl shadow-blue-300  border-zinc-500 border-2 rounded-2xl p-3" key={product.id}>
            <h2 className="mb-3 font-bold">Product Name: {product.Name}</h2>
            <img src={product.image} alt={product.Name} className="w-full h-60 object-cover rounded" />
            <p className="mb-1">Price: ₹{product.price}</p>
            <p className="mb-2">Category: {product.category}</p>
            <button onClick={() => handleAddCart(product)} className="bg-cyan-600 text-blue-50 ps-2 p-1 pe-2 font-bold rounded">Add to cart</button>
          </div>
        ))}
      </div>


      {/* Cart */}
      <div className={`cartmain ${showCart ? "show " : ""}`}>
        <h3 className={`text-xl font-bold mb-2 ${theme ? "text-black" : "text-blue-400"}`}>Cart Items: {cart.length}</h3>
        {cart.length === 0 ? (
          <div className="flex justify-center text-center">
            <div className={`${theme ? "bg-white " : "bg-black"}`}>
              <img width={200} src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
              <p>Your cart is empty!</p>
              <p className="pb-1"> <small>Add items to it now.</small></p>
              <button className="bg-blue-500 rounded p-1">Shop Now</button>
            </div>
          </div>
        ) : (

          cart.map((item, i) => (
            <div key={i} className={`mb-2 p-2 main-inner w-[100%] ${theme ? "bg-white border-2 " : "bg-black border-2"} `}>
              <p className="font-semibold">{item.Name}</p>
              <img src={item.image} alt="" />
              <p>₹{item.price}</p>
              <p> Quantity = {item.quantity}</p>
              <button className="bg-cyan-950 text-amber-50 ps-2 pe-2 p-1 rounded"> Remove Item</button>
            </div>
          ))

        )}

        {cart.reduce((pre, sum) => {
          if (cart.length) {
            let total = Number(pre + sum.price)
            return total
          }
        }, 0)}
      </div>
    </div>
  );

};


export default Products;



