import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import NotFound from './containers/NotFound';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = "/" element ={<ProductListing/>}/>
      <Route path = "/product/:productId" element ={<ProductDetail/>}/>
      <Route path = "*" element ={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
