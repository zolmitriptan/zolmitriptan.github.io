import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Comment from "./components/comment/Comment";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <h1>here is the app</h1>
      <Navbar />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Comment />
      <Footer />
    </div>
  );
}
/* default layout section */

export default App;
