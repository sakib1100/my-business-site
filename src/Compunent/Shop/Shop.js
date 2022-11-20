import { map } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [product,setProdcut] = useState([]);
    useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProdcut(data))
    },[])
    return (
        <div className='flex mx-auto'>
   
 <div className='grid lg:grid-cols-3 max-sm:grid-cols-1 sm:grid-cols-2 gap-4 mx-auto mt-5'>
 {
    product.map(pd => <Product
    key={pd.id}
    pd={pd}
    ></Product>)
   }

 </div>

        </div>
    );
};

export default Shop;