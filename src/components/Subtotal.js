import React from 'react'
import "./styles/Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../StateProvider';
import {useNavigate} from "react-router-dom"


const Subtotal = () => {
    const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue();
    var basketTotal = 0;

    //subtotal 
    basket.forEach(element => {
        basketTotal = basketTotal + element.price;
    });

  return (
    <div className='subtotal'>
        <CurrencyFormat renderText={(value) => (
            <>
                <p>
                    Subtotal ({basket?.length} items):
                    <strong>{basketTotal}$</strong>
                </p>  
                <small className='subtotal__gift'>
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
        <button onClick={e => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal