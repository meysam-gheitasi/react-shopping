import React, { useContext } from 'react';

// Context Cart Shopping
import { CartContext } from '../context/CartContextProvider';

import CartUser from './CartUser';

const ShopCart = () => {

    const { state, dispatch } = useContext(CartContext)

    return (
        <div>
            <div className='flex flex-col'>
                {state.selectedItems.map(item => <CartUser key={item.id} data={item} />)}
            </div>
            <div>
                {
                    state.itemCounter > 0 &&
                    <div>
                        <p><span> Total Items: </span> {state.itemCounter} </p>
                        <p><span> Total Payments: </span> {state.total} </p>
                        <div>
                            <button onClick={() => {dispatch({ type: 'CHECKOUT' })}}>Check Out</button>
                            <button onClick={() => {dispatch({ type: 'CLEAR' })}}>Clear</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default ShopCart;
