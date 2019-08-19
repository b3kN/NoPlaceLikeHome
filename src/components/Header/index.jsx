import React from "react";
import { NavLink } from 'react-router-dom';

import './Header';

const Header = (props) => (
  <header>
    <title>
      <NavLink className="verticalAlign" to="/">
        {props.title}
      </NavLink>
    </title>
    <div className="navigation">
      <NavLink exact to="/" activeClassName="active">
        Home
          <span />
      </NavLink>
      <NavLink exact to="/about" activeClassName="active">
        About
          <span />
      </NavLink>
      <NavLink exact to="/services" activeClassName="active">
        Services
          <span />
      </NavLink>
      <NavLink exact to="/contact" activeClassName="active">
        Contact
          <span />
      </NavLink>
    </div>
  </header>
);

export default Header;