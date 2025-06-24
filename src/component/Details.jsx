import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../datas/products';

const Details = () => {
  const {id} = useParams();
  const data = products.filter((item)=>item.id==id);
  console.log(data);
  console.log(products)

  const navigaet = useNavigate()
const backToHome = () =>{
  navigaet('/')
}

  if(!data) return <p>page not found</p>;
  

  return (
    <div>
      <h1 className='font-bold text-3xl text-center p-3'>details page</h1>
      <div className='flex justify-center p-1 items-center'>

    {
      data.map((item)=>
      <div>
        <img className='w-100' src={item.img} alt="" />
        <p className='font-semibold text-lg'>Name :- {item.name}</p>
        <p className='font-semibold text-lg'>Price :- {item.price}</p>
        <p className='font-semibold text-lg'>Catergory :- {item.catergory}</p>
      </div>
      )
    }
      </div>
      <div className='mt-5 flex justify-center'>

    <button onClick={backToHome} className='bg-blue-600 cursor-pointer text-white text-lg font-semibold p-1 ps-2 pe-2 rounded'>Go to Home page</button>
      </div>
    </div>
  )
}

export default Details
