import React, { useState } from "react";
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

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "How expensive is flight on Mars?",
      lead:
        "Maybe some of you wonder where to go on vacation. The best destinetion for this summer is definitely Mars. If you are afraid of high travel costs, I have good news for you! The prices are fair enough.",
      date: "2020-04-28",
      image: mars,
      likes: 0,
    },

    {
      id: 2,
      title: "Radioactive objects on the Earth",
      lead:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Et dolor sit amet, consectetur.",
      date: "2020-04-15",
      image: radioactive,
      likes: 0,
    },

    {
      id: 3,
      title: "Time traveling affordable for everyone",
      lead:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Sed do eiusmod tempor incididunt",
      date: "2020-03-21",
      image: astronaut,
      likes: 0,
    },
  ]);

  const postsArrayCopy = [...posts];

  const sortedPosts = postsArrayCopy.sort(function (a, b) {
    return b.likes - a.likes;
  });

  function changeLikes(id, changeBy) {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return {
          id: post.id,
          title: post.title,
          lead: post.lead,
          date: post.date,
          image: post.image,
          likes: post.likes + changeBy,
        };
      }

      return post;
    });

    setPosts(updatedPosts);
  }

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
            <button className="filter" onClick={() => setPosts(sortedPosts)}>
              Filter by likes
            </button>
            {posts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                image={post.image}
                title={post.title}
                lead={post.lead}
                date={post.date}
                likes={post.likes}
                changeLikes={changeLikes}
              />
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
