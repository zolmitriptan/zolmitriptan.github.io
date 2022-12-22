import { Layout } from 'antd';
import './Header.scss'
import {Link} from "react-router-dom";
import React, {useState} from "react";

function Header() {
  const [headerStatus, setHeaderStatus] = useState('page-header');

  const changeHeaderColor = () => {
    if(window.scrollY >= 300) {
      setHeaderStatus('page-header active')
    } else setHeaderStatus('page-header')
  }

  window.addEventListener('scroll', changeHeaderColor)

  const audio = new Audio("https://open.spotify.com/embed/track/5FVd6KXrgO9B3JPmC8OPst?utm_source=oembed")

  return (
    <Layout.Header className={headerStatus}>
      <span className="headerSpace"></span>
      <div className="headerLeft">
        <img src="https://img.icons8.com/metro/52/null/doughnut.png" alt="logo"/>
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
      <div className="headerRight">
        <button onClick={() => audio.play()}>play</button>
      </div>
      <span className="headerSpace"></span>
    </Layout.Header>
  );
}

export default Header;
