import React, { useState, useEffect } from 'react'
import { products } from "../datas/products"
import Comment from './Comment';
import { FaCartShopping } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Tostyfiy from './Tostyfiy';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaRupeeSign, FaInfoCircle, FaPlus, FaBolt } from 'react-icons/fa';





const ProductCard = () => {
  const [mode,setMode] = useState('light')


  const [salected, setSalected] = useState("all");
  const [message, setMessage] = useState('');

  const filterData = salected === "all" ? products : products.filter((item) => {
    return item.catergory === salected
  })


  const handleMessage = (msg) => {
    setMessage(msg)
    setTimeout(() => {
      setMessage('')
    }, 3000);
  }


  const slider = () => {
    let butons = document.getElementById("slider-bar");
    butons.style.left = 0;
    butons.style.transition = "0.7s 0.2s  linear"
  }
  const removeSlider = () => {
    let butons = document.getElementById("slider-bar");
    butons.style.left = "-100%";
    butons.style.transition = "1.4s 0.2s  linear"
  }

  const naviagate = useNavigate()
  const [addcard, setAddcard] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];

  });
  const [cardcount, setCardcount] = useState(() => {
    return JSON.parse(localStorage.getItem("length")) || 0;

  });

  const handlefun = (getindex) => {
    console.log(getindex);
    naviagate(`/detail/${getindex}`);
  }



  const removeitem = (id, name) => {
    const updatedaddcard = addcard.filter(item => item.id !== id);
    let totalproduct = localStorage.setItem("cart", JSON.stringify(updatedaddcard));
    let totalLength = localStorage.setItem("length", JSON.stringify(updatedaddcard.length))
    setAddcard(updatedaddcard);
    totalLength = updatedaddcard.length;
    setCardcount(totalLength);

    handleMessage(`${name} is succedfully delete`)
  }



  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addcard));
    localStorage.setItem("length", JSON.stringify(addcard.length));
  }, [addcard]);
  const totalPrice = addcard.reduce((acc, item) => acc + parseFloat(item.price.replace(/,/g, "")) * item.quantity, 0);

  const formateTotal = totalPrice.toLocaleString("en-IN");



  return (
    <>
      {message && <Tostyfiy error={error} message={message} />}


      <div className='p-3' >
        <div className='flex flex-wrap justify-around  mt-3'>
          <button id="card" onClick={slider} className={`text-3xl ${mode === "light" ? 'text-black' : "text-white"} rounded  p-1 cursor-pointer relative`}><FaCartShopping />
            {cardcount > 0 && <span style={{ borderRadius: "50%", height: "24px", width: "24px", fontSize: "16px" }} className='absolute -top-4.5  -right-2 bg-red-500 font-semibold rounded-b-full text-white'>{cardcount}</span>}
          </button>
          <select onChange={(e) => setSalected(e.target.value)} name="" id="salect" className={`${mode === "light" ? "text-black " : "text-white"} border rounded mt-2`}>
            <option className={`${mode === "light" ? "text-black " : "text-white bg-black"}`} value="all">all</option>
            <option className={`${mode === "light" ? "text-black " : "text-white bg-black"}`} value="electric">electric</option>
            <option className={`${mode === "light" ? "text-black " : "text-white bg-black"}`} value="vihicle">vihicle</option>
            <option className={`${mode === "light" ? "text-black " : "text-white bg-black"}`} value="clothes">clothes</option>
            <option className={`${mode === "light" ? "text-black " : "text-white bg-black"}`} value="books">books</option>
            <option className={`${mode === "light" ? "text-black " : "text-white bg-black"}`} value="toys">toys</option>
            <option className={`${mode === "light" ? "text-black " : "text-white bg-black"}`} value="furniture">furniture</option>
          </select>

        </div>
      </div>

      <div id='slider-bar' className={`flow-cart fixed top-20  md:h-[90vh] h-70 md:w-100 w-90 overflow-y-scroll rounded -left-100  z-50`}>
        <div >
          <p onClick={removeSlider} className='text-4xl text-end pe-3 cursor-pointer sticky top-2.5'>x</p>
          {addcard.length > 0 && <p className='text-center font-bold text-xl p-2'>Total: ₹ {formateTotal}</p>}
          {addcard.length > 0 ? "" : <p className='text-center top-20'>No data found</p>}
          {
            addcard.map((items, index) => {
              return <div key={index}>
                <div className='flex p-2 gap-4 items-center'>
                  <img className='w-40 h-50 object-contain rounded ' src={items.img} alt="" />
                  <div className='flex gap-3 items-center'>
                    <div className='p-2'>
                      <p className=' font-semibold cursor-pointer'>Name :- {items.name}</p>
                      <p className='font-semibold cursor-pointer'>Price :- {items.price}</p>
                      <p className='font-semibold cursor-pointer'>quaninty :- {items.quantity}</p>
                    </div>
                    <div>
                      <button className='ms-auto text-2xl cursor-pointer hover:bg-red-600  hover:text-white p-1 rounded ' onClick={() => removeitem(items.id, items.name)}><MdDeleteForever /></button>
                    </div>

                  </div>
                </div>

              </div>
            })}

        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        {filterData.map((value, index) => {
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl p-4 flex flex-col justify-between hover:scale-[1.02] transform transition duration-300 ease-in-out"
            >
              {/* Image */}
              <div className="w-full cursor-pointer" onClick={() => handlefun(value.id)}>
                <img
                  src={value.img}
                  alt={value.name}
                  className="w-full h-48 object-contain rounded-md mb-4"
                />
              </div>

              {/* Info with icons */}
              <div className="space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <FaInfoCircle className="text-blue-500" /> ID: {value.id}
                </p>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                  <FaShoppingCart className="text-green-600" /> {value.name}
                </h2>
                <p className="text-md font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <FaRupeeSign /> {value.price}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  onClick={() => {
                    let index = addcard.findIndex((item) => item.id === value.id);
                    if (index === -1) {
                      const newaddcard = [...addcard, { ...value, quantity: 1 }];
                      setAddcard(newaddcard);
                      localStorage.setItem("cart", JSON.stringify(newaddcard));
                      setCardcount(newaddcard.length);
                      localStorage.setItem("length", JSON.stringify(newaddcard.length));
                      handleMessage(`${value.name} is successfully added`);
                    } else {
                      const updateQuantity = [...addcard];
                      updateQuantity[index].quantity += 1;
                      setAddcard(updateQuantity);
                      localStorage.setItem("cart", JSON.stringify(updateQuantity));
                      handleMessage(`${value.name} quantity increased`);
                    }
                  }}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition"
                >
                  <FaPlus /> Add to Cart
                </button>

                <button
                  className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition"
                >
                  <FaBolt /> Buy Now
                </button>
              </div>

              {/* Comments */}
              <div className="mt-4">
                <Comment />
              </div>
            </div>
          );
        })}
      </div>

    </>
  )
}

export default memo(ProductCard)
