import React, {useState} from 'react'
import "./styles/Login.css"
import {Link, useNavigate} from "react-router-dom"
import {auth} from "../firebase"

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = e =>{
    //!this will prevent the page from refreshing
    e.preventDefault();
    
    //firebase stuff
    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          navigate("/")
        })
        .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    //firebase stuff
      auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //if successfully created a new user with email and password
        console.log(auth);
        if(auth){
          navigate('/')
        }
      })
      .catch(error => alert(error.message))
  }


  return (
    <div className='login'>
      <Link to={"/"}>
        <img className='login__logo' src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" />
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type='submit' onClick={signIn} className='login__signInButton'>Sign in</button>
        </form>

        <p>
          By signing-in you agree to Amazon Fake Clone's Conditions of Use & Sale. Please see
          our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login__registerButton'>Create you Amazon Account</button>
      </div>
    </div>
  )
}

export default Login