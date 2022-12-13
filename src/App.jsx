import React from 'react';
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
        <Footer />
      </Layout>
    </div>
  );
}
/* default layout section */

export default App;
