import React from 'react';
import Article from "../components/article/Article";
import './page.scss'
import Sidebar from "../components/sidebar/Sidebar";
import Comment from "../components/comment/Comment";

function Blog() {
  return (
    <div className="mainContent">
      <div className="rightContent">
        <h1>here is blog page</h1>
        <Article />
        <Comment />
      </div>
      <Sidebar />
    </div>
  );
}

export default Blog;
