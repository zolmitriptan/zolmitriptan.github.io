import { Layout } from 'antd';
import {Link} from "react-router-dom";
import React from "react";
import bgm from '../../asset/Cookie.mp3'
import '../header/Header.scss'

function Navbar() {
  const audio = new Audio(bgm);
  let isPlaying = false;

  function changeMusicStatus() {
    isPlaying? audio.pause() : audio.play()
    isPlaying = !isPlaying;
  }

  return (
    <Layout.Header className="page-header">
      <span className="headerSpace"></span>
      <div className="headerLeft">
        <img src="https://img.icons8.com/metro/60/null/doughnut.png" alt="logo"/>
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
        <button onClick={changeMusicStatus}>grab some cookies</button>
      </div>
      <span className="headerSpace"></span>
    </Layout.Header>
  );
}

export default Navbar;
