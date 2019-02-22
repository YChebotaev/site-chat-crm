import React from "react";
import { Container } from "reactstrap";
import { Navbar, NavbarBrand } from "reactstrap";

export const TopBar = () => {
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">
          Site Chat <small>CRM</small>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};
