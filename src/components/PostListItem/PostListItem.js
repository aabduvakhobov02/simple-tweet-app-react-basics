import React, { Component } from "react";
import "./PostListItem.css";

export default class PostListItem extends Component {
  state = {
    important: false,
    like: false,
  };

  onImportant = () => {
    this.setState(({ important }) => ({ important: !important }));
  };

  onLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    const { label, onDelete } = this.props;
    const { important, like } = this.state;
    let classNames = "app-list-item d-flex justify-content-between";

    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={this.onLike}>
          {label}
        </span>
        <div>
          <button className="btn-star btn-sm" onClick={this.onImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}
