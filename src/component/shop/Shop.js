import React, { useEffect, useState } from 'react';
import Product from '../../products/Products';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCard = (product) => {
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-containar'>
            <div className="product">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCard={addToCard}
                    ></Product>)
                }
            </div>
            <div className="order">
                <Cart Cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;