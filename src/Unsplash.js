import React, { Component } from "react";
import Clock from "./Clock";
import Logo from "./Logo";
import Image from "./Image";

export class Unsplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: []
    };
  }

  DoUnsplash() {
    fetch("https://source.unsplash.com/collection/431862/1600x900").then(
      response => {
        this.setState({ url: response.url });
      }
    );
  }

  componentDidMount() {
    this.DoUnsplash();
  }

  handleChange = event => {
    console.log("push the button");
    this.DoUnsplash();
  };

  render() {
    return (
      <React.Fragment>
        <Image url={this.state.url} />
        <Logo handleChange={this.handleChange} />
        <Clock />
        <p className="credits">Images: from unsplash.com</p>
      </React.Fragment>
    );
  }
}

export default Unsplash;
