import './App.css';
import Carrito from './componentes/Carrito';
import Inicio from './componentes/Inicio';
import {BrowserRouter, Route,Routes, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './componentes/Navbar';
import Footer from './componentes/Footer';
import {CartProvider} from './componentes/CartContext';
import Checkout from './componentes/Checkout';
import Ingresar from './componentes/Ingresar';
import NuevoProducto from './componentes/NuevoProducto';
import Padministrador from './componentes/Padministrador';
import Verventas from './componentes/Verventas';
import FotosProducto from './componentes/FotosProducto';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbarr />
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/fotos' element={<FotosProducto />} />
              <Route path='/carrito' element={<Carrito />} />
              <Route path='/categoria/:categoria' element={<Inicio />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/ingresar' element={<Ingresar />} />
              <Route path='/padministrador' element={<Padministrador />}/>
              <Route path='/nhuhehvho' element={<NuevoProducto />} />
              <Route path='/pvendidos' element={<Verventas />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
