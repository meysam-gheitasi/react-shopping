import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
    const params = useParams();

    return (
        <div>
            ProductsDetails - {params.id}
        </div>
    );
}

export default ProductsDetails;
