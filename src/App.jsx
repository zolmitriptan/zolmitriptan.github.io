import React from 'react';
import Footer from "./components/footer/Footer";
import {Layout} from "antd";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Outlet />
        {/*rendering child components (of app): home/blog/nopage*/}
        <Footer />
      </Layout>
    </div>
  );
}
/* default layout section */

export default App;
