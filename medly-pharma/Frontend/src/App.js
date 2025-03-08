import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Additem from './Admin/Additem';
import Wishlist from './User/Wishlist';
import Item from './Admin/Item';
import Home from './Components/Home';
import Uhome from './User/Uhome';
import Uitem from './User/Uitem';
import Myorders from './User/Myorders';
import OrderItem from './User/OrderItem';
import Products from './User/Products';
import Myproducts from './Admin/Myproducts';
import Ulogin from './User/Ulogin';
import Alogin from './Admin/Alogin';
import Asignup from './Admin/Asignup';
import Usignup from './User/Usignup';
import Orders from './Admin/Orders';
import Ahome from './Admin/Ahome';
import Users from './Admin/Users';



function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      {/* <Route path='/' element={<Home/>} /> */}

      {/* Admin */}
      <Route path='/alogin' element={<Alogin/>} />
      <Route path='/asignup' element={<Asignup/>} />
      <Route path='/ahome' element={<Ahome/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/myproducts' element={<Myproducts/>} />
      <Route path='/additem' element={<Additem/>} />
       <Route path='/item/:id' element={<Item/>} />
       <Route path='/orders' element={<Orders/>} />

      {/* Vendor */}
      {/* <Route path='/vlogin' element={<Vlogin/>} />
      <Route path='/vsignup' element={<Vsignup/>} />
       <Route path='/vhome' element={<Vhome/>} />
       <Route path='/myproducts' element={<Myproducts/>} />
       <Route path='/additem' element={<Additem/>} />
       <Route path='/item/:id' element={<Item/>} />
       <Route path='/orders' element={<Orders/>} />
       <Route path="/wishlist" element={<Wishlist />} /> */}

         {/* user */}
         <Route path='/' element={<Ulogin/>} />
      <Route path='/usignup' element={<Usignup/>} />
         <Route path='/uhome' element={<Uhome/>} />
         <Route path='/uproducts' element={<Products/>} />
       <Route path='/uitem/:id' element={<Uitem/>} />
       <Route path="/wishlist" element={<Wishlist />} />
       <Route path="/orderitem/:id" element={<OrderItem />} />
       <Route path="/myorders" element={<Myorders />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
