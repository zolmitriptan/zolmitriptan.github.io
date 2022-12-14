import React from 'react';
import Gallery from "../../components/gallery/Gallery";
import '../page.scss'
import './Home.scss'
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <div className="homePage">
      <Header />
      <div className="banner">
        <div className="bannerLeft">left side</div>
        <div className="bannerRight">right side</div>
      </div>
      <div className="mainContent">
        <div className="leftContent">
          <div className="space">yep here's main content</div>
          <Gallery />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
