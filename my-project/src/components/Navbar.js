import React, { useContext } from 'react';

// icons

import shopIcon from "../assets/icons/shopping.svg"

// context cart state

import CartContextProvider from '../context/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContextProvider);

    return (
        <div>
            <div>
                <img src={shopIcon} alt='shopping' />
                <spn>{state.itemCounter}</spn>
            </div>
        </div>
    );
}

export default Navbar;
