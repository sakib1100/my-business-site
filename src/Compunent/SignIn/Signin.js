import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



 
const Signin = () => {
const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  if (user) {
 return navigate('/home')
  }


const handleOnSubmit = (event) => {
event.preventDefault();
const name = event.target.userName.value;
const email = event.target.email.value;
const password = event.target.password.value;
createUserWithEmailAndPassword(email,password)

}

    return (
        <div>
  <div className="hero min-h-screen bg-base-200">
 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
   <div className="card-body">
   <h1 className='text-2xl text-center font-black'>Sign In </h1>
   <form onSubmit={handleOnSubmit}>
   <div className="form-control  border-none">
       <label className="label"> 
         <span className="label-text">Name</span>
       </label>
       <input name='userName' type="text" placeholder="name" className="input input-bordered" required/>
     </div>
     <div className="form-control  border-none">
       <label className="label"> 
         <span className="label-text">Email</span>
       </label>
       <input name='email' type="text" placeholder="email" className="input input-bordered" required/>
     </div>
     <div className="form-control border-none">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
       <label className="label">
         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
       </label>
     </div>
     <div className="form-control  border-none ">
     <p style={{'color':"red"}}>{error?.message}</p>
        {
          loading && <p>Loadding...</p>
        }
       <button className="btn hover:bg-error-content text-white bg-error border-none">Sign In</button>
       <a className='mt-2'>  <Link  to="/login"> Login here </Link></a>
     </div>
   </form>
   
   </div>
 </div>
</div>
</div>
    );
};

export default Signin;