import React, { Component } from "react";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

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
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Service</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="outline-light">Search</Button>
        </Navbar>
      </>
    );
  }
}

export default App;
