import React from 'react';
import Article from "../components/article/Article";
import './page.scss'
import Sidebar from "../components/sidebar/Sidebar";
import Comment from "../components/comment/Comment";

function Blog() {
  return (
    <div className="mainContent">
      <h1>here is blog page</h1>
      <Sidebar />
      <Article />
      <Comment />
    </div>
  );
}

export default Blog;
