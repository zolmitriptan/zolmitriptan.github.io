import { Layout } from 'antd';
import './Header.scss'
import {Link} from "react-router-dom";
import React from "react";

function Header() {
  return (
    <Layout.Header className="page-header">
      <div className="headerLeft">
        <img src="https://img.icons8.com/windows/64/null/007-logo.png" alt="logo"/>
        <p>left</p>
      </div>
      <div className="headerCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/blogs">BLOGS</Link>
          </li>
          <li className="topListItem">
            <Link to="/search">SEARCH</Link>
          </li>
        </ul>
      </div>
      <div className="headerRight"><p>right</p></div>
    </Layout.Header>
  );
}

export default Header;
