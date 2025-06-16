import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import CartSidebar from "../components/CartSidebar";
import image from "../components/img/tablet.jpeg";
import laptop from "../components/img/laptop.jpeg";
import watch from "../components/img/watch.jpg";
import handbag from "../components/img/handbag.jpeg";
import smartwatch from "../components/img/smartwatch.jpg";
import tshirt from "../components/img/tshirt.jpg";
import notebook from "../components/img/notebook.jpeg";
import iPhone from "../components/img/iPhone.jpeg";
import shirt from "../components/img/shirt.webp";
import shoes from "../components/img/shoes.jpg";
import yslheel from "../components/img/ysl_heel.jpg";
import flat from "../components/img/flats.jpg";
import Chanelperfume from "../components/img/Chanelperfume.jpg";
import buds from "../components/img/buds.webp";
import eyeshadow from "../components/img/makeup.jpg";
import serum from "../components/img/serum.jpg";
import blush from "../components/img/blush.jpg";
import moisturizer from "../components/img/moisturizer.jpg";
import lipstick from "../components/img/lipstick.jpeg";
import kurti from "../components/img/kurti.webp";
import shortkurti from "../components/img/shortkurti.jpg";
import top from "../components/img/tops.jpg";
import bellvita from "../components/img/bellvita.webp";
import locket from "../components/img/locket.jpg";
import ring from "../components/img/ring.jpg";
import earring from "../components/img/earing.jpg";
import Bracelets from "../components/img/bracelets.jpg";
import ringss from "../components/img/ringgs.jpg";




const products = [
  { id: 1, name: "tablet", price: 50000, image },
  { id: 2, name: "laptop", price: 80000, image: laptop },
  { id: 3, name: "iPhone 16", price: 100000, image: iPhone },
  { id: 4, name: "Smart watch", price: 15000, image: smartwatch },
  { id: 5, name: "Wireless Earbuds", price: 1599, image:buds },
  { id: 6, name: "YSL Heel", price: 999, image: yslheel },
  { id: 7, name: "HandBag", price: 699, image: handbag },
  { id: 8, name: "Shoes", price: 599, image: shoes },
  { id: 9, name: "T-Shirt", price: 299, image: tshirt },
  { id: 10, name: "Shirt", price: 499, image: shirt },
  { id: 11, name: "Flats Sandals", price: 399, image: flat },
  { id: 12, name: "Watch", price: 449, image: watch },
  { id: 13, name: "Notebook", price: 50, image: notebook },
  { id: 14, name: "Chanel Perfume", price: 899, image: Chanelperfume },
  { id: 15, name: "Eyeshadow", price: 1299, image:eyeshadow },
  { id: 16, name: "blush", price: 999, image:blush},
  { id: 17, name: "hair Serum", price: 699, image: serum},
  { id: 18, name: "moisturizer", price: 1099, image:moisturizer },
  { id: 19, name: "Lipstick", price: 1199, image:lipstick },
  { id: 20, name: "kurti", price: 899, image:kurti },
  { id: 21, name: "Short Kurti", price: 799, image:shortkurti },
  { id: 22, name: "Top", price: 499, image:top },                           
  { id: 23, name: "Bella Vita", price: 899, image:bellvita },
  { id: 24, name: "Locket", price: 299, image:locket },
  { id: 25, name: "Ring", price: 199, image:ring },
  { id: 26, name: "Earring", price: 299, image:earring },
  { id: 27, name: "Bracelets", price: 399, image:Bracelets },
  { id: 28, name: "Rings", price: 299, image:ringss },
 
];

const Home = ({ cart, setCart, showCart, setShowCart }) => {
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const addToCart = (product) => {
    setCart((prev) => {
      // Check if the product already exists in the cart
      const found = prev.find((item) => item.id === product.id);

      if (found) {
        // Update quantity if item already exists
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

     
      return [...prev, { ...product, quantity: 1 }];      // If the product doesn't exist, add it to the cart
    });

    setToast(`${product.name} added to cart!`);
  };

  return (
    <div className="p-4 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-4">
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} addToCart={addToCart} />
        ))}
      </div>

      {showCart && <CartSidebar cartItems={cart} setCart={setCart} setShowCart={setShowCart} />}

      {toast && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-md z-50">
          {toast}
        </div>
      )}
    </div>
  );
};

export default Home;