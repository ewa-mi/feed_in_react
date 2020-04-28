import React from "react";
import "./App.css";
import Post from "./Post.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">Some feed</header>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
