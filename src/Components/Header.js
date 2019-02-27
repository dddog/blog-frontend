import React from "react";
import { withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

import { Navbar, Nav, Button } from "react-bootstrap";

const Header = styled.header``;

const SearchIcon = styled.i`
  display: block;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Navbar bg="danger" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <LinkContainer to="/">
        <Navbar.Brand>Kiwon.io</Navbar.Brand>
      </LinkContainer>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <LinkContainer to="/About">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Service">
            <Nav.Link>Service</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </Navbar.Collapse>
      <Button variant="outline-light">
        <SearchIcon className="material-icons">search</SearchIcon>
      </Button>
    </Navbar>
  </Header>
));
