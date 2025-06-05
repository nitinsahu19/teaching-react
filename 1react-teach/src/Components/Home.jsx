import React from 'react'
import Header from './Header'
import ProductCart from './ProductCart'

function Home(props) {
    return (
        <>
            <Header />
            <ProductCart logout={props.logout} />
        </>
    )
}

export default Home
