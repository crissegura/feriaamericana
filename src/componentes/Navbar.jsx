import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext';
import {useContext} from 'react';
import Admin from './Admin';


function Navbarr() {

  const {cart, totalCantidad} = useContext(CartContext);

  return (
    <Navbar bg="light" expand="lg" >
      <Container >
      {/*<Link to='/carrito' style={{textDecoration:'none'}} className='cartCel'>
              <button className='btn-nav nCarrito'>
                <span className='nCarrito'> {totalCantidad()} </span>
                <img className='imgCarrito' 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgp9PaIdYvGKH3DAZTIsj9Fs2YAxY8Pp8ujw&usqp=CAU" alt="" />
              </button>
        </Link> */}
        <Navbar.Brand>
          <Link to='/'>
            <img className='imgNav' src="https://apple-store.com.ar/wp-content/uploads/2022/10/cropped-Favicon-32x32.png" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='navItems'>
            <Link to='/'>
              <button className='btn-nav'>
                Inicio
              </button>
            </Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <div className='categoria'>
                <Link to='/categoria/iphone' >    
                    <button className='btn-nav ' >
                      Iphone
                    </button>
                </Link>
                <Link to='/categoria/accesorios' >      
                    <button className='btn-nav py-1' >
                      Accesorios
                    </button>
                </Link>
                <Link to='/categoria/plancanje' >      
                    <button className='btn-nav ' >
                      Plan canje
                    </button>
                </Link>
              </div>
            </NavDropdown>
            <Admin />
            {/*  
            <Link to='/carrito'  className='cartPc' style={{textDecoration:'none'}}>
              <button className='btn-nav nCarrito'>
                <span className='nCarrito'> {totalCantidad()} </span>
                <img className='imgCarrito' 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgp9PaIdYvGKH3DAZTIsj9Fs2YAxY8Pp8ujw&usqp=CAU" alt="" />
              </button>
            </Link>
            */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;