import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const dummyData = [
    { name: 'raj', role: "admin" },
    { name: 'raja', role: "active" },
    { name: 'rajesh', role: "user" },
  ]

  const [searchParams, setSearchParams] = useSearchParams()

  const rolefilter = searchParams.get('role')

  const filterData = rolefilter === 'All' ? dummyData : dummyData.filter((item) => item.role === rolefilter)

  const handlfilter = () => {
    setSearchParams({ role })
  }


  return (
    <>
      <div className=' flex gap-20 mt-10 justify-center'>
        <h1 className='text-3xl font-bold italic'>All list</h1>
        <select className='border' onChange={(e) => setSearchParams(e.target.value)} name="" id="">
          <option value="All">All</option>
          <option value="admin">admin</option>
          <option value="active">active</option>
          <option value="user">user</option>
        </select>
      </div>


      {filterData.map((item) => <div>
        <p>{item.name}</p>
        <p>{item.role}</p>
      </div>)}
    </>
  )
}

export default Home
