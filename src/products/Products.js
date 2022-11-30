import React from 'react';
import './Products.css'

const Product = (props) => {
    console.log(props);
    return (
        <div className='cards'>
            <div className="card">
                <div className="img-containar">
                    <img src={props.product.img} alt="" />
                </div>
                <div className="card-info">
                    <h3 className='name'>{props.product.name}</h3>
                    <h4>Price :${props.product.price}</h4>
                    <p>Manufacturer : {props.product.seller}</p>
                    <p>Rating : {props.product.ratings}</p>
                </div>
                <div className="shop-button">
                    <button className='shop-btn'>Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Product;