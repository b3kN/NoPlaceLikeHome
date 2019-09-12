import React from "react";
import { NavLink } from 'react-router-dom';

import './Header';

let bannerHeight = 0,
  bannerChanged = false;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerClass: ""
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    bannerHeight = 0;
  }

  handleScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      checkHeight = bannerHeight > 0 ? bannerHeight : document.getElementById("headerWrapper").offsetHeight - 120;

    bannerHeight = bannerHeight === 0 ? checkHeight : bannerHeight;

    if (bannerChanged) {
      bannerChanged = false;
    } else {
      if (winScroll > checkHeight) {
        this.setState({ headerClass: "scrolled" });
        bannerChanged = true;
      } else {
        this.setState({ headerClass: "" });
      }
    }
  }

  render() {
    return (
      <header id="headerWrapper" className={this.state.headerClass} >
        <div id="headerBanner" className="banner" />
        <div className="navHolder">
          <title>
            <NavLink className="verticalAlign" to="/" />
          </title>
          <div className="navigation">
            <NavLink className="verticalAlign" exact to="/" activeClassName="active">
              Home
            <span />
            </NavLink>
            <NavLink className="verticalAlign" exact to="/about" activeClassName="active">
              About
            <span />
            </NavLink>
            <NavLink className="verticalAlign" exact to="/services" activeClassName="active">
              Services
            <span />
            </NavLink>
            <NavLink className="verticalAlign" exact to="/contact" activeClassName="active">
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