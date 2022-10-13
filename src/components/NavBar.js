import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from './CartWidget';

function Navegacion() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container className='.pe-6'>
                <Navbar.Brand href="#home">.::.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link href="#home">Página principal</Nav.Link>
                        <NavDropdown title="Secciones" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Gaseosas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Vinos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cervezas</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contactanos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Cart />
            </Container>
        </Navbar>
    );
}

export default Navegacion;