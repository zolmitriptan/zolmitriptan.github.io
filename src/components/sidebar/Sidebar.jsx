import React from 'react';
import {Link, Outlet} from "react-router-dom";

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
      <Outlet />
      {/* rendering child components (of app): home/blog/nopage */}
    </div>
  );
}

export default Sidebar;
