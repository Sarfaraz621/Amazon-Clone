import React from 'react'
import { useStateValue } from './StateProvider'
import Header from './Header';
import "./Checkout.css"
import "./CheckoutProduct.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}]=useStateValue();
  return (
    <>
    <Header/>
    <div className='checkout'>
      <img className='checkout_ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg"
      alt="ads"/>
      {basket?.length===0 ? (
        <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>Your basket is empty.If you wish to buy an item, press "Add to basket" below an item.</p>
        </div>
      ) : (
        <div>
            <h2 className='checkout_title'>Your Shopping Basket</h2>
            {basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}/>
            ))}
        </div>
      )}
    </div>
    {basket.length > 0 && (
        <div className='checkout_right'>
            <h1>Subtotal</h1>
            <Subtotal/>
        </div>
    )}
      </>
  )
}

export default Checkout
