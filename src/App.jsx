import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'
import ContextComponent from './ContextComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
 

  return (
    <>
    <ContextComponent>
      <Header/>
      <ProductList/>
    </ContextComponent>
    <Footer/>
    </>
  )
}

export default App