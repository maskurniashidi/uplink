import React from "react";
import {Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
// import style from "./style/NavHome.module.css";

//component
import { AiOutlineSearch } from "react-icons/ai";

//assets
import uplinkLogo from "../../assets/images/uplinkLogo.svg";

function NavbarBoots() {
  return (
    <div>
      <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" >
        <Container classname="navbar">
        <img src={uplinkLogo}></img>
        <Navbar.Brand href="#home">Calorilin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#feature">Feature</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://user.calorilin.me/">Login User</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarBoots;
