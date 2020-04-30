import React, { useState } from "react";
import Post from "./Post";

export default function PostList(props) {
  return (
    <>
      <button>Filter</button>
      {props.posts.map((post) => (
        <Post
          key={post.id}
          image={post.image}
          title={post.title}
          lead={post.lead}
          date={post.date}
        />
      ))}
    </>
  );
}
