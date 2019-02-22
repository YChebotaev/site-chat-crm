import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

export const Sider = withRouter(({ match }) => {
  return (
    <div>
      <Nav vertical>
        <NavItem active={match.path.indexOf("/sites/") > -1}>
          <NavLink tag={Link} to="/sites/">
            Sites
          </NavLink>
        </NavItem>
        <NavItem active={match.path.indexOf("/requests/") > -1}>
          <NavLink tag={Link} to="/requests/">
            Requests
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
});
