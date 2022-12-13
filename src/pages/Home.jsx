import React from 'react';
import Gallery from "../components/gallery/Gallery";
import './page.scss'
import Sidebar from "../components/sidebar/Sidebar";

function Home() {
  return (
    <div className="homePage">
      <div className="banner">
        <h1>here is home page</h1>
      </div>
      <Sidebar />
      <Gallery />
    </div>
  );
}

export default Home;
