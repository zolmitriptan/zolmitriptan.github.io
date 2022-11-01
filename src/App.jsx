import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Comment from "./components/comment/Comment";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Comment />
      <Footer />
    </div>
  );
}
/* default layout section */

export default App;
