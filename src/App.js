import './App.css';
import Carrito from './componentes/Carrito';
import Inicio from './componentes/Inicio';
import {BrowserRouter, Route,Routes, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './componentes/Navbar';
import Footer from './componentes/Footer';
import {CartProvider} from './componentes/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbarr />
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/carrito' element={<Carrito />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
