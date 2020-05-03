import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage.js";
import PostPage from "./PostPage.js";
import astronaut from "./images/astronaut.jpg";
import mars from "./images/mars.jpg";
import radioactive from "./images/radioactive.jpg";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 3,
      title: "How expensive is flight on Mars?",
      lead:
        "Maybe some of you wonder where to go on vacation. The best destinetion for this summer is definitely Mars. If you are afraid of high travel costs, I have good news for you! The prices are fair enough.",
      date: "2020-04-28",
      full:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      image: mars,
      likes: 0,
    },

    {
      id: 2,
      title: "Radioactive objects on the Earth",
      lead:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Et dolor sit amet, consectetur.",
      date: "2020-04-15",
      full:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      image: radioactive,
      likes: 0,
    },

    {
      id: 1,
      title: "Alert! Time traveling affordable for everyone",
      lead:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Sed do eiusmod tempor incididunt",
      date: "2020-03-21",
      full:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      image: astronaut,
      likes: 0,
    },
  ]);

  function renderPostPage(routerProps) {
    let postId = parseInt(routerProps.match.params.id);
    let foundPost = posts.find((post) => post.id === postId);
    return (
      <PostPage
        title={foundPost.title}
        date={foundPost.date}
        lead={foundPost.lead}
        full={foundPost.full}
        image={foundPost.image}
      />
    );
  }

  return (
    <>
      <Switch>
        <Route
          path="/postPage/:id"
          render={(routerProps) => renderPostPage(routerProps)}
        />
        <Route exact path="/">
          <HomePage posts={posts} setPosts={setPosts} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
