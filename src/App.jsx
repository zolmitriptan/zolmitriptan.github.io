import React from 'react';
import Comment from "./components/comment/Comment";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Layout} from "antd";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Header />
        <Outlet />
        {/*rendering child components (of app): home/blog/nopage*/}
        <Comment />
        <Footer />
      </Layout>
    </div>
  );
}
/* default layout section */

export default App;
