import React from "react";
import "./Header.css";

const Header = ({ allTweets, likedTweets }) => {
  return (
    <div className="app-header d-flex">
      <h1>Abdubori Abduvakhobov</h1>
      <h2>
        Total {allTweets} tweets, {likedTweets} liked
      </h2>
    </div>
  );
};

export default Header;
