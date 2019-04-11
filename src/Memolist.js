import React, { Component } from "react";
import "./Memolist.css";
import ItemsList from "./ItemsList";

export class Memolist extends Component {
  // How to set state
  // 1. state = { text: ''}

  constructor(props) {
    super(props);

    this.localstorage = JSON.parse(localStorage.getItem("items"));
    this.items = this.localstorage !== null ? this.localstorage : [];
    this.state = { text: "", items: this.items };
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      text: this.state.text
    };
    const newItems = this.state.items.concat(newItem);
    this.setState(state => ({ items: newItems, text: "" }));
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  render() {
    return (
      <div className="memo">
        <h3>My plan for this day!</h3>
        <ItemsList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="listitem"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

export default Memolist;
