import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchApi } from '../redux/reduxCounter/api'

function ReduxApi() {

    const dispatch = useDispatch()
    const {data, loading, error } = useSelector(state => state.data)

    useEffect(() => {

        dispatch(fetchApi())

    }, [dispatch])

    return (
        <>
            <div>
                <h1 className='mt-5 text-2xl font-bold'>Hello... Redux Api</h1>

                <div style={{ padding: '20px' }}>
                    <h2>Product List</h2>

                    {loading && <p>Loading...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {data && data.map((item) => (
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

export default ReduxApi
