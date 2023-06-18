import React, { useContext } from 'react';


// context cart state

import CartContextProvider from '../context/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContextProvider)

    return (
        <div>
            
        </div>
    );
}

export default Navbar;
