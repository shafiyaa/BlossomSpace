import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import Footer from './Components/Common/Footer';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Blog from './Pages/Blog';
import {
  AllProduct,
  NewArrival,
  Plant,
  Pot,
} from './Components/ShopCompo/ProductComponents';

function App() {
  return (
    <div className=' '>
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/blog" element={<Blog />}></Route>

        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>


        <Route element={<Shop></Shop>}>
          <Route path="/shop/all-product" element={<AllProduct />}></Route>
          <Route path="/shop/new-arrival" element={<NewArrival />}></Route>
          <Route path="/shop/plant" element={<Plant />}></Route>
          <Route path="/shop/pot" element={<Pot />}></Route>
        </Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
