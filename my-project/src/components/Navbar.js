import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// icons
import shopIcon from "../assets/icons/shopping.svg"

// context cart state
import { CartContext } from '../context/CartContextProvider';


const Navbar = () => {

    const { state } = useContext(CartContext);

    return (
        <div>
            <div>
                <Link to="/" >Products </Link>
            </div>
            <div>
                <Link to="/shopcart">
                    <img src={shopIcon} alt='shopping' />
                    <span>{state.itemCounter}</span>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
