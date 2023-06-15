import React, { useReducer } from 'react';

const initialState = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkout: false
}



const CartContextProvider = () => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <div>

        </div>
    );
}

export default CartContextProvider;
