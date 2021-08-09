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
      {
        label: "I am learning React!!!",
        important: true,
        like: false,
        id: 1,
      },
      {
        label: "I want to buy a brand new car",
        important: false,
        like: false,
        id: 2,
      },
      {
        label: "I need to find a proper job",
        important: true,
        like: false,
        id: 3,
      },
    ],
    searchValue: "",
    filter: "all",
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
  toggleImportantHandler = (id) => {
    let newArr = [...this.state.data];
    const index = newArr.findIndex((item) => item.id === id);
    newArr[index].important = !newArr[index].important;
    this.setState({ data: newArr });
  };
  toggleLikeHandler = (id) => {
    let newArr = [...this.state.data];
    const index = newArr.findIndex((item) => item.id === id);
    newArr[index].like = !newArr[index].like;
    this.setState({ data: newArr });
  };

  searchTweetHandler = (tweets, value) => {
    if (value.length === 0) {
      return tweets;
    }

    return tweets.filter((tweet) => {
      return tweet.label.toLowerCase().indexOf(value) > -1;
    });
  };
  onValueChanged = (value) => {
    this.setState({ searchValue: value });
  };
  tweetFilterHandler = (tweets, filter) => {
    if (filter === "like") {
      return tweets.filter((tweet) => tweet.like);
    } else {
      return tweets;
    }
  };
  onFilterClickHandler = (filter) => {
    this.setState({ filter });
  };
  render() {
    const { data, searchValue, filter } = this.state;

    const likedTweets = data.filter((item) => item.like).length;
    const allTweets = data.length;

    const visibleTweets = this.tweetFilterHandler(
      this.searchTweetHandler(data, searchValue),
      filter
    );

    return (
      <div className="app">
        <Header likedTweets={likedTweets} allTweets={allTweets} />
        <div className="search-panel d-flex">
          <SearchPanel onValueChanged={this.onValueChanged} />
          <PostStatusFilter
            filter={filter}
            onFilterClick={this.onFilterClickHandler}
          />
        </div>
        <PostList
          posts={visibleTweets}
          DeleteHandler={this.deleteHandler}
          toggleImportant={this.toggleImportantHandler}
          toggleLike={this.toggleLikeHandler}
        />
        <PostAddForm AddHandler={this.postAddHandler} />
      </div>
    );
  }
}
