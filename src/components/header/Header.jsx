import { Layout } from 'antd';
import './Header.scss'
import {Link} from "react-router-dom";
import React from "react";

function Header() {
  return (
    <Layout.Header className="page-header">
      <span className="headerSpace"></span>
      <div className="headerLeft">
        <img src="https://img.icons8.com/windows/64/null/007-logo.png" alt="logo"/>
        <h1>Khaire</h1>
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
      <span className="headerSpace"></span>
    </Layout.Header>
  );
}

export default Header;
