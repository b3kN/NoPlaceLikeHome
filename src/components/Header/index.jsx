import React from "react";
import { NavLink } from 'react-router-dom';

import './Header';

let bannerHeight = 0,
  bannerChanged = false;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    bannerHeight = 0;
  }

  handleScroll() {
    // TODO: Set up proper React functionality here
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      checkHeight = bannerHeight > 0 ? bannerHeight : document.getElementById("headerBanner").offsetHeight - 60,
      header = document.getElementById("headerWrapper"),
      content = document.getElementById("contentWrapper");

    bannerHeight = bannerHeight === 0 ? checkHeight : bannerHeight;

    if (bannerChanged) {
      bannerChanged = false;
    } else {
      if (winScroll > checkHeight) {
        header.classList.add("scrolled");
        content.classList.add("scrolled");
        bannerChanged = true;
      } else {
        header.classList.remove("scrolled");
        content.classList.remove("scrolled");
      }
    }
  }

  render() {
    return (
      <header id="headerWrapper">
        <div id="headerBanner" className="banner" />
        <div className="navHolder">
          <title>
            <NavLink className="verticalAlign" to="/">
              {this.props.title}
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
        </div>
      </header>
    );
  }
}

export default Header;