import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// A method to check the presence of a product in the shopping cart /isInCart/
// A method for shortening strings and converting them into the first two parts /shorten/
import { isInCart, quantitiyCount, shorten } from '../../helper/function';

// Shopping cart and reducer methods
import { CartContext } from '../../context/CartContextProvider';

// Icons

import trashIcon from '../../assets/icons/trash.svg';

const Cart = ({ product }) => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div className='flex border-solid rounded-lg shadow-md'>

            <div className='flex flex-col'>

                <img className='w-52 h-52' src={product.image} alt={product.title} />
                <h3>{shorten(product.title)}</h3>
                <p>{product.price}</p>

                <div className='flex justify-between'>

                    <Link to={`/products/${product.id}`}>
                        <h4 className="text-sky-500">Details</h4>
                    </Link>
                    <div>
                        {
                            isInCart(state, product.id) ?
                                <button onClick={() => dispatch({ type: "INCREASE", payload: product })}>+</button> :
                                <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>Add to Cart</button>
                        }
                        {
                            quantitiyCount(state, product.id) === 1 && <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: product})}>
                                <img className='w-5' alt='trash icon' src={trashIcon} />
                            </button>
                        }
                        {
                            quantitiyCount(state, product.id) > 1 && <button onClick={() => dispatch({ type: "DECREASE", payload: product })}>-</button>
                        }
                        
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Cart;
