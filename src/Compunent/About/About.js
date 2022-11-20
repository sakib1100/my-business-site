import React from 'react';
import image from './../../Image/pexels-gustavo-fring-4173116.jpg'
import image2 from './../../Image/pexels-cottonbro-studio-4004127.jpg'
const About = () => {
    return (
        <div>
            <div className='container mb-5'>
           <h1 className='text-5xl font-black text-center mt-10 max-sm:text-3xl'>About Us</h1>
           <div className='row text-center'>
            <p className='col-md-12  py-8 text-center max-sm:text-md'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <div className='lg:flex max-sm:block  justify-center  max-sm:ml-10 '>
                <img className='w-2/6 max-sm:w-9/12 md-w-10/12'  src={image}></img>
                <img className='w-2/6 max-sm:w-9/12' src={image2}></img>
            </div>
           </div>
            </div>
        </div>
    );
};

export default About;