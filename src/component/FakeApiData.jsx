import React,{useState ,useEffect} from 'react'
import { memo } from 'react';


const FakeApiData = () => {
     const [data,setData] = useState([]);
    const [category,setCategory] = useState("All");
  const [limit,setLimit] = useState(3)
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then(res =>res.json())
      .then((result)=>{
        setData(result);
      }).catch((err)=>{
        console.log('Something went wrong',err);
        
      })
    },[limit])

    const handlecount = ()=>{
      setLimit(limit+3)
    }
    const filterValue = category==="All"?data:data.filter((item)=>{
      return item.category===category
    })


 
  return (
    <div>
       <div>
      <select name="" id="" value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>
   <div className='grid grid-cols-3 gap-3'>
        {
            filterValue.map((item,index)=>
            <div key={index} className='border rounded bg-gray-50  mt-2 p-2'>
                <img className='h-80' src={item.image} alt="product"/>
                <p className='font-bold text-2xl'>ID : {item.id}</p>
                <p className='font-medium'>Title : {item.title}</p>
                <p className='font-medium'>Category : {item.category}</p>
                <p><span className='font-semibold'>Description : </span>{item.description.slice(0,100)}...</p>
                <p><span className='font-semibold'>Price : </span>{item.price} ₹</p>
            </div>
            )
        }
      </div>
     {limit<=data.length? <div className='flex justify-center mt-3 mb-2'>
      <button className='bg-amber-400 rounded p-2 ' onClick={handlecount}>View more</button>
      </div>:""}
    </div>
    </div>
  )
}

export default memo(FakeApiData)
