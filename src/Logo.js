import React from "react";
import Image from "./Image";
import logo from "./logo.svg";
export default class Logo extends React.Component {
  render() {
    return (
      <div>
        <img
          src={logo}
          onClick={this.props.handleChange}
          className="App-logo"
          alt="logo"
        />
      </div>
    );
  }
}
