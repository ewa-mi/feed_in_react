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
import AddPostForm from "./AddPostForm";

import "./HomePage.css";

function HomePage() {
  const [posts, setPosts] = useState([
    {
      id: 3,
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
      id: 1,
      title: "Alert! Time traveling affordable for everyone",
      lead:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Sed do eiusmod tempor incididunt",
      date: "2020-03-21",
      image: astronaut,
      likes: 0,
    },
  ]);
  const [filterBy, setFilterBy] = useState("by date");

  const postsArrayCopy = [...posts];

  let sortedPosts;

  if (filterBy === "by date") {
    sortedPosts = posts;
  } else if (filterBy === "title") {
    sortedPosts = postsArrayCopy.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  } else if (filterBy === "likes") {
    sortedPosts = postsArrayCopy.sort(function (a, b) {
      return b.likes - a.likes;
    });
  }
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

  function addPost(title, lead, date, image) {
    const newPost = {
      id: posts.length + 1,
      title: title,
      lead: lead,
      date: date,
      image: image,
      likes: 0,
    };

    const updatedPosts = [newPost, ...posts];
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
            <AddPostForm addPost={addPost} />
            <label className="filter">FILTER POSTS</label>
            <select onChange={(event) => setFilterBy(event.target.value)}>
              <option value="by date">by date</option>
              <option value="title">alphabetically</option>
              <option value="likes">by likes</option>
            </select>{" "}
            {sortedPosts.map((post) => (
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

export default HomePage;
