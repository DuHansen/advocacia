import React, { useState } from 'react';
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from "../img/logoMG.png";



export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand={'md'} fixed="top" style={{backgroundColor:"#102E4A"}}>
      <Container>
        <Navbar.Brand as={Link} to="/"> 
          <img
            src= {logo}
            width="90"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" style={{color:"#102E4A", border: "none"}} onClick={handleShow}>
          <div class="container">
            <label for="label-check" class="hamburger-label">
              <div class="line" style={{backgroundColor: "#ffffff", height: "2px", width: "30px", marginBottom: "5px"}}></div>
              <div class="line" style={{backgroundColor: "#ffffff", height: "2px", width: "30px", marginBottom: "5px"}}></div>
              <div class="line" style={{backgroundColor: "#ffffff", height: "2px", width: "30px", marginBottom: "5px"}}></div>
            </label>
          </div>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end" style={{backgroundColor:"#102E4A", justifyContent:'center'}}
          
        >
          <Offcanvas.Header closeButton style={{color:"#ffffff"}}>
            <Offcanvas.Title id="offcanvasNavbarLabel">
            <img
            src= {logo}
            width="90"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
            </Offcanvas.Title>
          </Offcanvas.Header >
          <Offcanvas.Body >
            <Nav style={{color:"#ffffff", fontSize:"20px"}} className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link style={{color:"#ffffff"}} as={Link} to="/" onClick={handleClose}>Inicial</Nav.Link>
              <Nav.Link style={{color:"#ffffff"}} as={Link} to="/sobre" onClick={handleClose}>Sobre</Nav.Link>
              <Nav.Link style={{color:"#ffffff"}} as={Link} to="/contato" onClick={handleClose}>Contato</Nav.Link>
              <NavDropdown style={{color:"#ffffff", fontSize:"20px"}} title="Áreas de atuação" id="offcanvasNavbarDropdown">
                <div style={{textAlign: "center", justifyContent:'center'}}>
                  <NavDropdown.Item as={Link} to="/trabalhista" onClick={handleClose}>Trabalhista</NavDropdown.Item>
                  <NavDropdown.Item href="#action4" onClick={handleClose}>Consumidor</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/previdenciario" onClick={handleClose}>Previdenciário</NavDropdown.Item>
                  <NavDropdown.Item href="#action5" onClick={handleClose}>Tributario</NavDropdown.Item>
                  <NavDropdown.Item href="#action5" onClick={handleClose}>Bancario</NavDropdown.Item>
                </div>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
