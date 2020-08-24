import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={NavLink} to="/">
          Todorius
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
