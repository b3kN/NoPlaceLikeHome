import React from "react";
import { NavLink } from 'react-router-dom';

import './Header';

const Header = (props) => (
  <header>
    <title>{props.title}</title>
    <div className="navigation">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/about">About</NavLink>
      </div>
      <div>
        <NavLink to="/services">Services</NavLink>
      </div>
      <div>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  </header>
);

export default Header;