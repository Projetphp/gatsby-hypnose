import React, { Component } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Modalhome from "src/componants/modal.js"

import "bootstrap/dist/css/bootstrap.min.css"
import "src/style/custom-bootstrap.css"

class NavBar extends Component {
  render() {
    return (
      <Navbar className="Navbar" bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Métiers" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hypnose</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Magnétisme</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Sophrologie
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Parcours" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Formations</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Art & Inspirations
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Les séances" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Prise de rendez-vous
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Livre d'or</NavDropdown.Item>
            </NavDropdown>

            <Modalhome />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
