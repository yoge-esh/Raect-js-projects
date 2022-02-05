import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navigation.css'

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <NavLink to="/Tech" className="nav-link">Tech</NavLink>
            <NavLink to="/Business" className="nav-link">Business</NavLink>
            <NavLink to="/Public" className="nav-link">Public</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
