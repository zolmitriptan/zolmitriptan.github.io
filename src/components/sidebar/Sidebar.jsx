import React from 'react';
import avatar from '../../asset/raccoon.jpg'
import './Sidebar.scss'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebarContent">
        <span className="contentTitle">here is sidebar section</span>
        <img src={avatar} alt="raccoon avatar"/>
        <p>introductions</p>
      </div>
      <div className="sidebarContent">
        <span className="contentTitle">tags</span>
        <ul className="tagList">
          <li className="tagItem">English</li>
          <li className="tagItem">Novels</li>
          <li className="tagItem">Poems</li>
        </ul>
      </div>
      <div className="sidebarContent">
        <span className="contentTitle">contacts</span>
        <div className="snsIcons">
          <img src="https://img.icons8.com/ios-filled/40/null/twitter-circled.png" alt="twitter icon"/>
          <img src="https://img.icons8.com/ios-filled/40/null/github.png" alt="github icon"/>
          <img src="https://img.icons8.com/ios-glyphs/40/null/instagram-circle.png" alt="instagram icon"/>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
