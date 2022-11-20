import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';

import New from '../New/New';
import image from './../../Image/portrait-young-happy-girl-holding-shopping-bags-removebg-preview (1).png';
const Home = () => {
    return (

<div> 
<div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="lg:w-5/12 max-sm:w-10/5 rounded-lg " alt="image2" />
    <div>
      <h1 className="text-5xl font-bold max-sm:text-3xl">Online Shopping!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
      <button className="btn btn-error "><Link to="/shop" className='hover-black'>Visit Shop</Link></button>
    </div>
  </div>
</div>


<About></About>

<New></New>


<Home />
</div>

    );
};

export default Home;