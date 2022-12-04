import React from 'react';
import "./Cart.css"

const Cart = (Cart) => {
    return (
        <div className='Cart'>
            <div>

                <h2 className='order-title'>Order Summary</h2>
                <br />
                <div className="order-info">
                    <p>Selected Items: {Cart.Cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;