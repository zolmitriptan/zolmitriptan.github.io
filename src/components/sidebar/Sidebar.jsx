import React from 'react';
import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <h1>here is sidebar section</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
