import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

// Products Context
import { ProductsContext } from '../context/ProductsContextProvider';

const ProductsDetails = () => {

    const products = useContext(ProductsContext)

    const params = useParams();
    const product = products[params.id - 1]
    console.log(product)

    return (
        <div>
            ProductsDetails - {params.id}
        </div>
    );
}

export default ProductsDetails;
