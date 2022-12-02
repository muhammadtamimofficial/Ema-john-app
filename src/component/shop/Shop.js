import React, { useEffect, useState } from 'react';
import Product from '../../products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-containar'>
            <div className="product">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="order">
                <h2 className='order-title'>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;