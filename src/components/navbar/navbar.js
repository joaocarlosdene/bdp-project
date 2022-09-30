import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../images/logo.png';
import Style from '../navbar/navbar.module.css'
import React from "react";


import {Link,} from "react-router-dom";

function navbar() {
  return (
    <>
        <div className={Style.container}>
        <Navbar  expand={'md'}  className=" container">
          <Container fluid >
            <Navbar.Brand href="#"><img className={Style.logo} src={Logo} /><span className={Style.engenharia}> Engenharia & Automacao</span></Navbar.Brand>
            <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas className='menu'
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header  closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <img className={Style.logo} src={Logo} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" bg="dark">
                  <Nav.Link as={Link} className={Style.link} to="/">Inicio</Nav.Link>
                  <Nav.Link as={Link} className={Style.link}  to="/quem_somos">Quem Somos</Nav.Link>
                  <Nav.Link as={Link} className={Style.link}  to="/atuacao">Atuação</Nav.Link>
                  <Nav.Link as={Link} className={Style.link}  to="/contato">Contato</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
      
      
    </>
  );
}

export default navbar;