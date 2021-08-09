import React, { Component } from "react";
import "./PostStatusFilter.css";

export default class PostStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "like", label: "Liked" },
  ];

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterClick } = this.props;
      const active = filter === name;
      const activeClass = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={name}
          type="button"
          className={`btn  ${activeClass}`}
          onClick={() => onFilterClick(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
