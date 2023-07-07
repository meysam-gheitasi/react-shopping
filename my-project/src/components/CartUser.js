import React, { useContext } from 'react';

// Context Cart Shopping
import { CartContext } from '../context/CartContextProvider';

// Functions Helper
import { shorten } from '../helper/function';

// Icons
import trash from '../assets/icons/trash.svg'

const CartUser = ({ data }) => {

    const { dispatch } = useContext(CartContext)

    const { image, title, price, quantity } = data

    return (
        <div>
            <img src={image} alt='product' />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({ type: "DECREASE", payload: data })}>-</button> :
                    <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data})}><img className='w-5' src={trash} alt='trash' /></button>
                }
                {
                    <button onClick={() => dispatch({ type: "INCREASE", payload: data })}>+</button>
                }
            </div>
        </div>
    );
}

export default CartUser;
