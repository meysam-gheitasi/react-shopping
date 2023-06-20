import React, { useContext } from 'react';

// Context Cart Shopping
import { CartContext } from '../context/CartContextProvider';
import CartUser from './CartUser';

const ShopCart = () => {

    const dataCart = useContext(CartContext)

    return (
        <div>
            {
                dataCart.map(item => <CartUser key={item.id} data={item} />)
            }
        </div>
    );
}

export default ShopCart;
