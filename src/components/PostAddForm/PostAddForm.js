import React, { Component } from "react";
import "./PostAddForm.css";

export default class PostAddForm extends Component {
  state = {
    text: "",
  };
  onInputChangedHandler = (e) => {
    this.setState({ text: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.AddHandler(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="What are you thinking about?"
          className="form-control new-post-label"
          onChange={this.onInputChangedHandler}
          value={this.state.text}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Add
        </button>
      </form>
    );
  }
}
