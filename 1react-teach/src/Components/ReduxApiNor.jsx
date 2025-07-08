import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux' 
import { useSelector } from 'react-redux'
import { productData } from '../redux/reduxCounter/NormalApiRedux'

const ReduxApiNor = () => {

    

    const dispatch = useDispatch();
    const value =  useSelector(state => state.products.product)
    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                dispatch(productData(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [dispatch])

    return (
        <>
            <div>
                <h1 className='mt-10 text-2xl font-bold'>Redux Api Normal</h1>

                <div style={{ padding: '20px' }}>
                    <h2 className='my-4 text-xl font-bold'>Product List</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                        {value && value.map((item) => (
                            <div key={item.id} style={{
                                border: '1px solid #ccc',
                                padding: '10px',
                                borderRadius: '8px',
                                width: '200px',
                                textAlign: 'center'
                            }}>
                                <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                <h4 style={{ fontSize: '16px', margin: '10px 0' }}>{item.title.slice(0, 30)}...</h4>
                                <p>₹{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </>
    )
}

export default ReduxApiNor