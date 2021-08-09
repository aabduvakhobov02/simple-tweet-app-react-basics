import React, { Component } from "react";
import "./SearchPanel.css";

export default class SearchPanel extends Component {
  state = {
    searchValue: "",
  };
  valueChangedHandler = (e) => {
    const inputValue = e.target.value;
    this.setState({ searchValue: inputValue });
    this.props.onValueChanged(inputValue);
  };
  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Search from tweets"
        onChange={this.valueChangedHandler}
      />
    );
  }
}
