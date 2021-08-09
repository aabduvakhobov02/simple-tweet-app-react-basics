import React, { Component } from "react";
import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";

import "./App.css";

export default class App extends Component {
  state = {
    data: [
      { label: "I am learning React", important: true, id: 1 },
      { label: "I want to buy a brand new car", important: false, id: 2 },
      { label: "I need to find a proper job", important: true, id: 3 },
    ],
  };

  deleteHandler = (id) => {
    let arr = [...this.state.data];
    const index = arr.findIndex((item) => item.id === id);
    arr.splice(index, 1);
    this.setState({ data: arr });
  };
  postAddHandler = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: this.state.data.length + 1,
    };
    const newArr = [...this.state.data, newItem];
    this.setState({ data: newArr });
  };
  render() {
    return (
      <div className="app">
        <Header />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} DeleteHandler={this.deleteHandler} />
        <PostAddForm AddHandler={this.postAddHandler} />
      </div>
    );
  }
}
