import React, { Component } from "react";

import { Navbar, Nav, Button } from "react-bootstrap";

const iStyle = {
  display: "block"
};

class App extends Component {
  render() {
    return (
      <>
        <Navbar bg="danger" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home">Kiwon.io</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Service">Service</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </Navbar.Collapse>
          <Button variant="outline-light">
            <i className="material-icons" style={iStyle}>
              search
            </i>
          </Button>
        </Navbar>
      </>
    );
  }
}

export default App;
