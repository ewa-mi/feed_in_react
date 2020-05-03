import React, { useState } from "react";
import Post from "./Post.js";
import Header from "./Header.js";
import SidebarLeft from "./SidebarLeft.js";
import SidebarRight from "./SidebarRight.js";

import { ReactComponent as Home } from "./home.svg";
import Navbar from "./Navbar";
import AddPostForm from "./AddPostForm";
import "./HomePage.css";

function HomePage({ posts, setPosts }) {
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
