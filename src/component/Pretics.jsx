import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchingData } from './slice/productSlice'

const Pretics = () => {
  const dispatch = useDispatch()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((datas)=>dispatch(fetchingData(datas)))
        .catch((err)=>console.log(err))
    },[])
    const data = useSelector(state=>state.apiProduct.product)
  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        {data.map((item,index)=>
        <div className='border p-2 rounded' key={index}>
          <div>
        <img className='h-34 mx-auto' src={item.image} alt="" />
          </div>
        <p>{item.title}</p>
        <p className='text-blue-600'>Rs : {item.price}</p>
        </div>
        )}
      </div>
    </div>
  )
}

export default Pretics
