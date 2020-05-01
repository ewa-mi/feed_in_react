import React, { useState } from "react";
import "./AddPostForm.css";

export default function AddPostForm(props) {
  const [newPost, setNewPost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.addPost(newPost);

    setNewPost("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="yourPost">ADD YOUR POST</label>
      <textarea
        className="textarea"
        value={newPost}
        onChange={(event) => setNewPost(event.target.value)}
      />
      <input className="submitButton" type="submit" />
    </form>
  );
}
