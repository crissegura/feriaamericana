import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Feria americana | </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navItems">
            <Link to='/'>
              <button className='btn-nav'>
                Inicio
              </button>
            </Link>
            <Link to='/carrito'>
              <button className='btn-nav mx-3'>
                <img className='imgCarrito' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgp9PaIdYvGKH3DAZTIsj9Fs2YAxY8Pp8ujw&usqp=CAU" alt="" />
              </button>
            </Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                    Mujeres
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Hombres
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Niños
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;