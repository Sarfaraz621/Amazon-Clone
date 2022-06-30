import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
  const [{basket},dispatch]=useStateValue();
  const addToBasket = () => {
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };
  return (
    <div className='product'>
        <div className="product_info">
        <span>{title}</span><br/>
        <span className='product_price'>
            <small>Rs.</small>
            <strong>{price}</strong>
        </span><br/>
        <span className="product_rating">
            {
                Array(rating)
                .fill()
                .map((_) => (
                    <p>⭐</p>
                    ))
            }
        </span>
      </div>
      <img src={image} alt=""/>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
