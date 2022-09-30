import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../images/logo.png';
import Style from '../navbar/navbar.module.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function navbar() {
  return (
    <>
      <Router>
      {['md' ].map((expand) => (
        <div className=' container' >
        <Navbar key={expand}  expand={expand} className="mb-3">
          <Container fluid >
            <Navbar.Brand href="#"><img className={Style.logo} src={Logo} />Engenharia & Automacao</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className='menu'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img className={Style.logo} src={Logo} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" bg="dark">
                  <Nav.Link to="/">Inicio</Nav.Link>
                  <Nav.Link to="/quem-somos">Quem Somos</Nav.Link>
                  <Nav.Link to="/atuacao">Atuacao</Nav.Link>
                  <Nav.Link to="/contato">Contato</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/">
            
          </Route>
          <Route path="/quem-somos">
            
          </Route>
          <Route path="/atuacao">
            
          </Route>
          <Route path="/contato">
            
          </Route>
        </Switch>
        </div>
      ))}
      </Router>
    </>
  );
}

export default navbar;