import React, { useContext } from 'react';

// icons
import shopIcon from "../assets/icons/shopping.svg"

// context cart state
import { CartContext } from '../context/CartContextProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { state } = useContext(CartContext);

    return (
        <div>
            <div>
                <Link to="/Cart" >Cart</Link>
                <div>
                    <img src={shopIcon} alt='shopping' />
                    <span>{state.itemCounter}</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
