import React from 'react';
import "./Cart.css"

const Cart = (Carts) => {
    // console.log(Carts.Cart);
    let totalPrice = 0;
    let shipping = 0;
    let tex = 0;
    let GrandTotal = 0;
    for (let cart of Carts.Cart) {
        totalPrice += cart.price;
        shipping += cart.shipping;
        tex = totalPrice / 10;
        GrandTotal = totalPrice + shipping + tex;
    }
    return (
        <div className='Cart'>
            <div>

                <h2 className='order-title'>Order Summary</h2>
                <br />
                <div className="order-info">
                    <p>Selected Items: {Carts.Cart.length}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Shiping charge: ${shipping}</p>
                    <p>Tex: ${tex}</p>
                    <br />
                    <h3>Grand Total: ${GrandTotal}</h3>
                </div>
                <div className='order-btns'>
                    <button className='clear-cart'>Clear Cart</button>
                    <br />
                    <button className='reviwe-order'>Reviwe Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;