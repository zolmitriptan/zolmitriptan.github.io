import { Layout } from 'antd';
import './Header.scss'
import {Link} from "react-router-dom";
import React, {useState} from "react";
import bgm from '../../asset/Cookie.mp3'

function Header() {
  const [headerStatus, setHeaderStatus] = useState('');
  const audio = new Audio(bgm);
  let isPlaying = false;

  const changeHeaderColor = () => {
    if(window.scrollY >= 300) {
      setHeaderStatus('active')
    } else setHeaderStatus('')
  }

  window.addEventListener('scroll', changeHeaderColor)

  function changeMusicStatus() {
    isPlaying? audio.pause() : audio.play()
    isPlaying = !isPlaying;
  }

  return (
    <Layout.Header className={`page-header ${headerStatus}`}>
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
      <div className={`headerRight ${headerStatus}`}>
        <button onClick={changeMusicStatus}>grab some cookies</button>
      </div>
      <span className="headerSpace"></span>
    </Layout.Header>
  );
}

export default Header;
