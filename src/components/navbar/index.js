import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../images/logo.png';
import '../navbar/style.css'

function navbar() {
  return (
    <>
      {['md' ].map((expand) => (
        <div className=' container fixed-top' >
        <Navbar key={expand}  expand={expand} className="mb-3">
          <Container fluid >
            <Navbar.Brand href="#"><img id='Logo' src={Logo} />Engenharia & Automacao</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className='menu'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img id='Logo' src={Logo} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" bg="dark">
                  <Nav.Link href="#action1">Inicio</Nav.Link>
                  <Nav.Link href="#action2">Quem Somos</Nav.Link>
                  <Nav.Link href="#action2">Atuacao</Nav.Link>
                  <Nav.Link href="#action2">Contato</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
      ))}
    </>
  );
}

export default navbar;