import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product, handleAddtoCart}) => {
    // const {product, handleAddtoCart}= props;
     const{name, img, price, seller, ratings} =product;
     
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5 className='product-name'>{name}</h5>
            <div className="product-info">
                <p> Seller: {seller}</p>
               <h4>Price: ${price}</h4>
               <p>Ratings: {ratings} ratings</p>

            </div>
            <button onClick={()=>handleAddtoCart(product)} className='btn-cart'> 
            <p className='btn-text'> Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;