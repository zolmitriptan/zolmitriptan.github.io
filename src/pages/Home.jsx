import React from 'react';
import Gallery from "../components/gallery/Gallery";
import './page.scss'
import Sidebar from "../components/sidebar/Sidebar";

function Home() {
  return (
    <div>
      <h1>here is home page</h1>
      <Sidebar />
      <Gallery />
    </div>
  );
}

export default Home;
