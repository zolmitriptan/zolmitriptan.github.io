import React from 'react';
import Gallery from "../components/gallery/Gallery";
import './page.scss'
import Sidebar from "../components/sidebar/Sidebar";

function Home() {
  return (
    <div>
      <div className="banner">
        <h1>BANNER</h1>
      </div>
      <div className="mainContent">
        <div className="rightContent">
          <div className="space">yep here's main content</div>
          <Gallery />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
