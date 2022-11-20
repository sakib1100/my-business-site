import React from 'react';

const Product = ({pd}) => {
    const {name,img,price} = pd
    return (
        <div>
            {/* style={{'width': '18rem'}} */}
   <div className="card h-100 max-sm:w-52"       >
   <img src={img} className="card-img-top" alt="sakib.jpg" />
   <div className="card-body">
    <p className="card-text">{name}</p>
    <p>Price:<span className='font-bold text-xl'> ${price}</span></p>
    <a href='https:sakib.js'  className='btn btn-error'>Add To Chart</a>
   </div>
   </div>
    </div>
    );
};

export default Product;