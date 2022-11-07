import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import Comment from "./components/comment/Comment";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Layout} from "antd";

function App() {
  return (
    <div>
      <Layout>
        <Header />
        <Sidebar />
        <Comment />
        <Footer />
      </Layout>
    </div>
  );
}
/* default layout section */

export default App;
