import React, { useContext } from 'react';

// Context Cart Shopping
import { CartContext } from '../context/CartContextProvider';

import CartUser from './CartUser';
import { Link } from 'react-router-dom';

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
            {
                state.checkout && 
                <div>
                    <h3>Check Out Successfully</h3>
                    <Link to='/'>Buy More</Link>
                </div>
            }
            {
                !state.checkout && state.itemCounter === 0 &&
                <div>
                    <h3>Want to Buy ?</h3>
                    <Link to='/'>Go to Shop</Link>
                </div>
            }
        </div>
    );
}

export default ShopCart;
