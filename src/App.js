import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import Shop from './component/shop/Shop';
import Inventory from './component/Inventory/Inventory';
import Forbidden from './component/Forbidden/Forbidden';
import { Routes, Route } from "react-router-dom"
import Order from './component/Order/Order';
import Log_In from './component/Log_In/Log_In';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/Shop' element={<Shop></Shop>}></Route>
        <Route path='/Order' element={<Order></Order>}></Route>
        <Route path='/Inventory' element={<Inventory> </Inventory>}></Route>
        <Route path='/Log_In' element={<Log_In></Log_In>}></Route>
        <Route path='*' element={<Forbidden></Forbidden>}></Route>
      </Routes >
      {/* <Shop></Shop> */}
      {/* <Product></Product> */}
    </div >
  );
}

export default App;
