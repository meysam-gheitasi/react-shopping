import React, { useContext } from 'react';

// Context Cart Shopping
import { CartContext } from '../context/CartContextProvider';

import CartUser from './CartUser';

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div>
            {
                state.selectedItems.map(item => <CartUser key={item.id} data={item} />)
            }
        </div>
    );
}

export default ShopCart;
