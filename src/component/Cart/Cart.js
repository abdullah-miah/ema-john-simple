import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total+product.price;
        shipping = shipping+ product.shipping;
    }
    let tax = parseFloat((total *0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4 className='cart-title'> Order Summary</h4>
             {/* <h1>Order Items:{cart.length} </h1> */}
             <p> Order Items: {cart.length}</p>
             <p> Total price: ${total} </p>
             <p> Total Shipping: ${shipping} </p>
             <p>Tax: ${tax} </p>
            <h5> Grand price:  ${grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;