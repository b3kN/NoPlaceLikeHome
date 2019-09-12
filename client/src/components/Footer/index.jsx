import React from "react";

import './Footer';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyFooter: ""
    };
    this.toggleStickyFooter = this.toggleStickyFooter.bind(this);
  }

  componentDidMount() {
    this.toggleStickyFooter();
  }

  toggleStickyFooter() {
    let headerHeight = document.getElementById("headerWrapper").clientHeight,
      contentHeight = document.getElementById("contentWrapper").clientHeight,
      rootHeight = document.getElementById("root").clientHeight,
      footerHeight = document.getElementById("footerWrapper").clientHeight;

    this.setState({
      stickyFooter: contentHeight < rootHeight - headerHeight - footerHeight ? "sticky" : ""
    });
  }

  render() {
    return (
      <footer id="footerWrapper" className={this.state.stickyFooter} >
        <div className="footerContent">
          <span className="topper" />
          <div>
            <span className="bold">
              Footer Placeholder test
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;