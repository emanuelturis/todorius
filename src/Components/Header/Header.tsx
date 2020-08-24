import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={NavLink} to="/">
          Todorius
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact to="/" activeClassName="active">
            Dashboard
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
