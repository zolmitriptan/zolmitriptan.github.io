import React from 'react';
import {Link, Outlet} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>here is navbar section</h1>
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

export default Navbar;
