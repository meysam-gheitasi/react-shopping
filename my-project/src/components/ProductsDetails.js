import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

// Products Context
import { ProductsContext } from '../context/ProductsContextProvider';

const ProductsDetails = () => {

    const products = useContext(ProductsContext);

    const params = useParams();
    const product = products[params.id - 1];
    const {image, title, description, price, category} = product;

    return (
        <div className='flex solid rounded-lg shadow-md bg-slate-100'>
        <div>
            <img src={image} alt={title} />
        </div>
        <div className='flex flex-col rounded-lg solid bg-white'>
            <h2 className='text-sky-600'>{title}</h2>
            <p>{description}</p>
            <p>{category}</p>
            <div className='flex'>
                <span>{price}</span>
                <Link to="/">Back to Shop</Link>
            </div>
        </div>
    </div>
    );
}

export default ProductsDetails;
