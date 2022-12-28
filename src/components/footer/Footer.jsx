import React from 'react';
import { Layout } from 'antd';
import "./Footer.scss"

function Footer() {
  return (
    <Layout.Footer className="pageFooter">
      <div className="footerContent">
        <span>last updated at:</span>
        <p>word counts:</p>
        <p>sentence to summarize</p>
      </div>
    </Layout.Footer>
    );
}

export default Footer;
