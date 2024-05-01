import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from './context/CartContext';
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout.jsx";


function App() {

  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="" />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </CartProvider>
      
    </BrowserRouter>
  );
}

export default App
