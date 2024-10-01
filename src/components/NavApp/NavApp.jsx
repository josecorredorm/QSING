import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavApp.css';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-white">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src="./Logo.png"
              width="227"
              height="82"
              className="d-inline-block align-top"
              alt="QS logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className='NavContainer'>
            <Nav.Link className='lettersNav' href="#features">SERVICIOS</Nav.Link>
            <Nav.Link className='lettersNav' href="#pricing">PROYECTOS</Nav.Link>
            <Nav.Link className='lettersNav' href="#pricing">CONTACTO</Nav.Link>
            <Nav.Link className='lettersNav' href="#pricing">POLITICA DE DATOS</Nav.Link>
            <NavDropdown className='lettersNav' title="FUNCIONARIOS" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Iniciar sesión</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Nuevo usuario</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;