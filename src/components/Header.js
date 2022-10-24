import React from 'react'
import './styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import {auth} from "../firebase"

const Header = () => {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to={"/"}>
            <img className='header__logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJbAuFNp8xoawKH1kNsNG5-F6ES6TU5HynQ&usqp=CAU'/> 
        </Link>

        <div className="header__search">
            <input type="text" className='header__searchInput' />
            <SearchIcon className="header__searchIcon" />
        </div> 

        <div className="header__nav">  
            <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className="header__option">
                <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>

            <Link to='/orders'>
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            </Link>

            <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>

            <Link to={"/checkout"}>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon className='header__shoppingBasket' />
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                </div>
            </Link>
        
        </div>

    </div> 

  )
}

export default Header