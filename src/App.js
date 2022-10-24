import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from 'react';
import {auth} from "./firebase"
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from "@stripe/react-stripe-js"
import Orders from './components/Orders';
import Footer from './components/Footer';


//safe to use publicly
const promise = loadStripe("pk_test_51LtokQHl4C3eVzEg7ywRtT9AFIagEP59FjnrI1zQOTdjMaKOP8CrYsMydwDaFul370OSlmxgUtv6mcfnemTQmhay00vsB57Pay");


function App() {

  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        //user logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<><Header /> <Home /> <Footer /></>} />
          <Route path="/checkout" element={<><Header /> <Checkout /> <Footer /></>} />
          <Route path="/login" element={<Login />} />
          <Route path='/payment' element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>} /> 
          <Route path="/orders" element={<><Header /> <Orders /> <Footer /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
