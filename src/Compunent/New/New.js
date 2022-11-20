import React from 'react';
import img1 from './../../Image/clock/1.jpg'
import img2 from './../../Image/clock/2.jpg'
import img3 from './../../Image/clock/3.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const New = () => {
    return (
        <div className='container mb-20'>
          <h1 className=' mt-40 mb-3  text-5xl text-center font-black max-sm:text-3xl'>Latest Arrivels</h1>
          <p className='text-center mb-10 '>Our Special Smart Hand Watch.</p>
         <div className='flex justify-center'>
         <div className=' grid lg:grid-cols-3 max-sm:grid-cols-1 sm:grid-cols-2 gap-10'>
             
             <div className="card w-80 h-96 max-sm:w-72 bg-base-100 shadow-xl">
      <figure className='border-b-2'><img src={img1} alt="Shoes" /></figure>
      <div className="card-body">
      <h2 className=" font-black text-3xl text-center">$30</h2>
        <p className='text-center text-2xl py-2'>MI M2</p>
        <div className="card-actions justify-center">
          <button className="btn btn-sm btn-error ">Buy Now</button>
        </div>
      </div>
    </div>
    <div className="card w-80 h-96 max-sm:w-72  bg-base-100 shadow-xl">
      <figure><img src={img3} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className=" font-black text-3xl text-center">$20</h2>
        <p className='text-center text-2xl py-2'>SAMSUNG G2</p>
        <div className="card-actions justify-center">
          <button className="btn btn-sm btn-error ">Buy Now</button>
        </div>
      </div>
    </div>
    <div className="card w-80 h-96 max-sm:w-72  bg-base-100 shadow-xl">
      <figure><img src={img2} alt="Shoes" /></figure>
      <div className="card-body">
      <h2 className=" font-black text-3xl text-center">$10</h2>
        <p className='text-center text-2xl py-2'>NYORK</p>
        <div className="card-actions justify-center">
          <button className="btn btn-sm btn-error ">Buy Now</button>
        </div>
      </div>
    </div>
    
    <div className="card w-80 h-96 max-sm:w-72  bg-base-100 shadow-xl">
      <figure><img src={img2} alt="Shoes" /></figure>
      <div className="card-body">
      <h2 className=" font-black text-3xl text-center">$15</h2>
        <p className='text-center text-2xl py-2'>NYORK</p>
        <div className="card-actions justify-center">
          <button className="btn btn-sm btn-error ">Buy Now</button>
        </div>
      </div>
    </div>
    
    <div className="card w-80 h-96 max-sm:w-72  bg-base-100 shadow-xl">
      <figure><img src={img2} alt="Shoes" /></figure>
      <div className="card-body">
      <h2 className=" font-black text-3xl text-center">$10</h2>
        <p className='text-center text-2xl py-2'>NYORK</p>
        <div className="card-actions justify-center">
          <button className="btn btn-sm btn-error ">Buy Now</button>
        </div>
      </div>
    </div>
    
    <div className="card w-80 h-96 max-sm:w-72  bg-base-100 shadow-xl">
      <figure><img src={img2} alt="Shoes" /></figure>
      <div className="card-body">
      <h2 className=" font-black text-3xl text-center">$10</h2>
        <p className='text-center text-2xl py-2'>NYORK</p>
        <div className="card-actions justify-center">
          <button className="btn btn-sm btn-error ">Buy Now</button>
        </div>
      </div>
    </div>
   
    
            </div>
    
         
         </div>
         <div className='hero justify-end'>
    <a className='btn btn-sm mt-16 max-sm:ml-10 mr-28 btn-error '><Link to="/shop">See All Products</Link>  <AiOutlineArrowRight className='ml-2'></AiOutlineArrowRight> </a>
    </div>
        </div>
    );
};

export default New;