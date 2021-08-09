import React from "react";
import "./SearchPanel.css";

const SearchPanel = () => {
  return (
    <input
      className="form-control search-input"
      type="text"
      placeholder="Search from tweets"
    />
  );
};

export default SearchPanel;
