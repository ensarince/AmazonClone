import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./styles/Checkout.css"
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider';
import FlipMove from 'react-flip-move';
import { animated, useSpring } from '@react-spring/web'


const Checkout = () => {  
  const [{basket, user}, dispatch] = useStateValue();

//! animation not ready
  const styles = useSpring({
    from: {
      opacity: 1
    },
    to: {
      transform: "translateX(-100%)",
      opacity: 0.5
    }
  })

  return (
    <div className='checkout'>
        <div className="checkout__left">
            <Link to={"/"}>
                <img className='checkout__ad' src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/d/AmazonStores/A1PA6795UKMFR9/e6a724615d20b7cbfb98cdf00a3b6fc1.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.jpg" alt="" />
            </Link>

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout__title'>Your shopping Basket</h2>
                {basket.map((item, i) => (
                        <CheckoutProduct key={i}
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                        ))}
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout