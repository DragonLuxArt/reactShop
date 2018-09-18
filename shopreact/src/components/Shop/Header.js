import React, { Component } from "react";
import "../Style/output.css";
import HeaderLogo from "../assets/logo.png"

class Header extends Component {
  render() {
    return (
      <div className="_Header">
      <div>
        <p>My-shop application</p>
        </div>
        <div className="headerLogo">
          <img src={HeaderLogo}/>
        </div>
      </div>
    );
  }
}

export default Header;
