import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from './slice/ApiSlice'

const FakeStore = () => {
    const dispatch = useDispatch();
    const {products,loading,error} = useSelector(state=>state.product)

    
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

  return (
    <div>
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center m-2">Fake Store Products</h1>
      {loading && <p className='flex justify-center items-center h-100 font-bold text-3xl'>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-2 rounded shadow">
            <img src={product.image} alt={product.title} className="h-32 mx-auto" />
            <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
            <p className="text-green-700 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default FakeStore
