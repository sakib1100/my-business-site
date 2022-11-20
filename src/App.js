import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Navbar/Navbar';
import Login from './Compunent/Login/Login';
import Home from './Compunent/Home/Home';
import Signin from './Compunent/SignIn/Signin';
import Shop from './Compunent/Shop/Shop';
import Order from './Compunent/Order/Order';
import RequireAuth from './Compunent/RequireAuth/RequireAuth';

import New from './Compunent/New/New';

function App() {
  return (
    <div>

<Navbar />
<Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path="/home" element={<Home></Home>}></Route>
  <Route path="/shop" element={<Shop></Shop>}></Route>
  <Route path="/order" element={<RequireAuth>
    <Order></Order>
  </RequireAuth>}>

  </Route>
  <Route path="/login" element={<Login></Login>}></Route>
 
  <Route path="/new" element={<New></New>}></Route>
  <Route path="/signin" element={<Signin></Signin>}></Route>
</Routes>

      
    </div>
  );
}

export default App;
