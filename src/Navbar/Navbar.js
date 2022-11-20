import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
     signOut(auth);
    }
    return (
      <nav className="navbar navbar-expand-lg  navbar-white bg-error">
      <div className="container">
      <a className="text-2xl font-bold"><Link className="flex items-center" >Online Shop <AiOutlineShoppingCart className='ml-2 font-black'></AiOutlineShoppingCart></Link>   </a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav">
            
              </div>
           
              <div className="navbar-nav text-center font-bold">
              <Link to="/home" className="nav-item nav-link active">Home</Link>
              <Link to="/shop" className="nav-item nav-link ">Shop</Link>
              <Link to="/order" className="nav-item nav-link">Order</Link>
             {
                user? <button onClick={handleSignOut}>Sign Out</button> :  <Link to="/login" className="nav-item nav-link">Login</Link>
             }
              </div>
          </div>
      </div>
  </nav>
       
    );
};

export default Navbar;