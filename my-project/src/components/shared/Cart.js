import React from 'react';

const Cart = ( {product} ) => {
    console.log(product)
    return (
        <div className='flex border-solid rounded-lg shadow-md'>

            <div className='flex flex-col'>

                <img className='w-52 h-52' src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>

                <div className='flex justify-between'>
                  
                   <a href='/'>
                    <h4 className="text-sky-500">Details</h4>
                    </a>
                   
                   <div>
                    <button className='btn btn-blue'>Add</button>
                   </div>

                </div>
            </div>
        </div>
    );
}

export default Cart;
