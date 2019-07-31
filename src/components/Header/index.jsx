import React from "react";
import './Header';

const Header = (props) => (
  <nav>
    <title> {props.title} </title>
    <sub-nav>
      <div>
        Home
      </div>
      <div>
        About
      </div>
      <div>
        Services
      </div>
      <div>
        Contact
      </div>
    </sub-nav>
  </nav>
);

export default Header;