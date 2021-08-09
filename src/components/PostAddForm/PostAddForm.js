import React from "react";
import "./PostAddForm.css";

const PostAddForm = ({ AddHandler, body }) => {
  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="What are you thinking about?"
        className="form-control new-post-label"
        value={body}
      />
      <button
        className="btn btn-outline-secondary"
        type="submit"
        onClick={() => AddHandler(body)}
      >
        Add
      </button>
    </div>
  );
};

export default PostAddForm;
