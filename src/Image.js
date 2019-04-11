import React from "react";
import "./Image.css";
export default class Image extends React.Component {
  render() {
    return <img src={this.props.url} alt="fun random pics from Unsplash" />;
  }
}
