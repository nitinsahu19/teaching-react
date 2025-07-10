import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../Reducer/productApi';

const ProductFetch = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.products.product);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                dispatch(setProducts(response))
            })
            .catch((err) => {
                console.log('Something went wrong', err);
            });
            
    }, [dispatch]);

    return (
        <div>
            <h1 className="text-center text-2xl font-bold italic text-green-700">All Products</h1>
            <div className='grid grid-cols-3 '>
                {items && items.map((pro) => (
                    <div className="border p-4 m-2">
                        <p>ID: {pro.id}</p>
                        <p>Title: {pro.title}</p>
                        <p>Price: $ {pro.price}</p>
                        <p>Rating: {pro.rating?.rate}</p>
                        <img src={pro.image} alt={pro.title} width="100" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductFetch;
