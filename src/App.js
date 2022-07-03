import logo from './logo.svg';
import './App.css';
import Product from './component/Product.js';
import Header from './component/Header.js';


import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {

  // let [inputState,setInputState]= useState('');
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}/>
      {/* <Route path="/" element={<Header />}/> */}
      <Route path="/product" element={<Product/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
