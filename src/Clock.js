import React from "react";
import "./App.css";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), color: null };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  ChangeColor() {
    let newColor = `rgb( ${Math.floor(Math.random() * 256)}, 
   ${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}`;
    return newColor;
  }

  tick() {
    this.setState({
      date: new Date(),
      color: this.ChangeColor()
    });
  }

  render() {
    return (
      <div className="container" style={{ color: this.state.color }}>
        <h2 className="clock">{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
