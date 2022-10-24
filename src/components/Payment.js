import React,{useState, useEffect} from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./styles/Payment.css"
import { useStateValue } from '../StateProvider';
import {Link, Navigate, useNavigate} from "react-router-dom"
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from "../reducer"
import axios from "../axios"
import { db } from '../firebase';

const Payment = () => {

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [clientSecret, setClientSecret] = useState(true)

    const navigate = useNavigate();

    const [{basket,user}, dispatch] = useStateValue();

    useEffect(() => {
      //generate special client secret every time basket changes
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url: `payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    
    console.log("The secret is -->> ", clientSecret)

    const stripe = useStripe()
    const elements = useElements();

    //parsing array for firebase
    const basketItems = (JSON.parse(JSON.stringify(basket)));

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            console.log(paymentIntent)
            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                basket: basketItems,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders', {replace: true})
        })
    }
    
    const handleChange = (event) =>{
        //Listen for the changes and display customer type errors
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
        <div className="payment__container">

            <h1>
                Checkout (
                    <Link to={"/checkout"}>
                        {basket?.length} items
                    </Link>
                )
            </h1>

            {/* Payment section - delivery adress */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery adress</h3>
                </div>
                <div className="payment__adress">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>

            {/* Payment section - Review item */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
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

            {/* Payment section - Payment method */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Peymont method</h3>
                </div>
                <div className="payment__details">
                    {/* STRIPE */}
                    <form action="" onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <h3>Order Total: {value}</h3>  
                                    </>
                                )}
                                 decimalScale = {2}
                                 value={getBasketTotal(basket)}
                                 displayType={"text"}
                                 thousandSeparator={true}
                                 prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : 
                                "Buy Now"}</span>
                            </button>
                        </div>
                        {/* ıf error, show */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Payment