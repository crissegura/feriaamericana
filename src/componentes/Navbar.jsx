import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext';
import {useContext} from 'react';


function Navbarr() {

  const {cart, totalCantidad} = useContext(CartContext);

  return (
    <Navbar bg="light" expand="lg" >
      <Container >
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
                <Link to='/categoria/mujer' >    
                    <button className='btn-nav ' >
                      Mujeres
                    </button>
                </Link>
                <Link to='/categoria/hombres' >      
                    <button className='btn-nav py-1' >
                      Hombres
                    </button>
                </Link>
                <Link to='/categoria/niños' >      
                    <button className='btn-nav ' >
                      Niños
                    </button>
                </Link>
              </div>
            </NavDropdown>
            <Link to='/carrito' style={{textDecoration:'none'}}>
              <button className='btn-nav nCarrito'>
                <span className='nCarrito'> {totalCantidad()} </span>
                <img className='imgCarrito' 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgp9PaIdYvGKH3DAZTIsj9Fs2YAxY8Pp8ujw&usqp=CAU" alt="" />
              </button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;