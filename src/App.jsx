import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Gallery from "./components/gallery/Gallery";
import Article from "./components/article/Article";
import Comment from "./components/comment/Comment";

function App() {
  return (
    <div>
      <h1>here is the app</h1>
      <Navbar />
      <Gallery />
      <Article />
      <Comment />
    </div>
  );
}

export default App;
