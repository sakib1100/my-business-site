import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
 
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
const location = useLocation();
const from  = location.state?.from?.pathname || '/';


  if (user) {
navigate(from, {replace: true });
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email,password)
    
    }

    return (
        <div>
      <div className="hero min-h-screen bg-base-200">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className='text-2xl text-center font-black'>Login </h1>
        <form onSubmit={handleOnSubmit}>
        <div className="form-control  border-none">
          <label className="label"> 
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
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
          <button className="btn hover:bg-error-content text-white bg-error border-none">Login</button>
         <a className=' mt-2'> <Link  to="/signin"> Sign In </Link></a>
          
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
      
    );
};

export default Login;