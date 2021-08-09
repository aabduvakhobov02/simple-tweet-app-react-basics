import React, { Component } from "react";
import "./PostListItem.css";

export default class PostListItem extends Component {
  render() {
    const { label, onDelete, onImportant, onLike, important, like } =
      this.props;
    let classNames = "app-list-item d-flex justify-content-between";

    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={onLike}>
          {label}
        </span>
        <div>
          <button className="btn-star btn-sm" onClick={onImportant}>
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
