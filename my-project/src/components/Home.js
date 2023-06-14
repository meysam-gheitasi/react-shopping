
import React, { useContext } from 'react';

// Products Context
import { ProductsContext } from '../context/ProductsContextProvider';


import Cart from './shared/Cart';

const Home = () => {

    const Products = useContext( ProductsContext );
    
    return (
        <div>
            {
                Products.map( item => <Cart key={item.id} product={item} />)
            }
        </div>
    );
}

export default Home;
