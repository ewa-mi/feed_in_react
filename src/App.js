import React from "react";
import Post from "./Post.js";
import Header from "./Header.js";
import SidebarLeft from "./SidebarLeft.js";
import SidebarRight from "./SidebarRight.js";
import astronaut from "./images/astronaut.jpg";
import mars from "./images/mars.jpg";
import radioactive from "./images/radioactive.jpg";
import { ReactComponent as Home } from "./home.svg";
import Navbar from "./Navbar";

import "./App.css";

const posts = [
  {
    title: "How expensive is flight on Mars?",
    lead:
      "Maybe some of you wonder where to go on vacation. The best destinetion for this summer is definitely Mars. If you are afraid of high travel costs, I have good news for you!",
    date: "Apr, 12. 2020",
    image: mars,
  },

  {
    title: "Radioactive objects on the Earth",
    lead:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    date: "Apr, 20. 2020",
    image: radioactive,
  },

  {
    title: "Time traveling affordable for everyone",
    lead:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: "Apr, 26. 2020",
    image: astronaut,
  },
];

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="head">
          <div>
            <Header />
          </div>
          <div className="navi">
            <Home />
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <SidebarLeft />
          </div>
          <div className="col-6">
            {posts.map((post) => (
              <div>
                <Post
                  image={post.image}
                  title={post.title}
                  lead={post.lead}
                  date={post.date}
                />
              </div>
            ))}
          </div>
          <div className="col-3">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
