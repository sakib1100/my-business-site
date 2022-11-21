import React from 'react';

const Product = ({pd}) => {
    const {name,img,price,seller} = pd
    return (
        <div>
   <div class="card h-100 max-sm:w-52" style={{'width': '18rem'}}>
   <img src={img} class="card-img-top" alt="Card image cap" />
   <div class="card-body">
    <p class="card-text">{name}</p>
    <p>Price:<span className='font-bold text-xl'> ${price}</span></p>
    <a className='btn btn-error'>Add To Chart</a>
   </div>
   </div>
    </div>
    );
};

export default Product;