import React from 'react';
import Article from "../../components/article/Article";
import '../page.scss'
import './Blogs.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Comment from "../../components/comment/Comment";
import Navbar from "../../components/navbar/Navbar";

function Blog() {
  return (
    <div className="blogsPage">
      <Navbar />
      <div className="mainContent">
        <div className="leftContent">
          <h1 className="space">here is blog page</h1>
          <Article />
          <Comment />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default Blog;
