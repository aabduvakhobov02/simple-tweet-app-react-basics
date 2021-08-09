import React from "react";
import PostListItem from "../PostListItem/PostListItem";
import "./PostList.css";

const PostList = ({ posts, DeleteHandler, toggleImportant, toggleLike }) => {
  const items = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...itemProps}
          onDelete={() => DeleteHandler(id)}
          onImportant={() => toggleImportant(id)}
          onLike={() => toggleLike(id)}
        />
      </li>
    );
  });
  return <ul className="app-list list-group"> {items}</ul>;
};

export default PostList;
