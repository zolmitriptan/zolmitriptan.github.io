import { Layout } from 'antd';
import './Header.scss'
import {Link} from "react-router-dom";
import React from "react";

function Header() {
  return (
    <Layout.Header className="page-header">
      <div className="headerLeft">
        <img src="https://img.icons8.com/windows/64/null/007-logo.png" alt="logo"/>
        <p>sns icons</p>
      </div>
      <nav className="headerCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/blogs">BLOGS</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/search">SEARCH</Link>
          </li>
        </ul>
      </nav>
      <div className="headerRight"><p>write  sign in</p></div>
    </Layout.Header>
  );
}

export default Header;
