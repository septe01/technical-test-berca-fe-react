import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const index = () => {
  return (
    <header>
      <nav className="nav-warape">
        <div className="title-subtitle">
          <h2>Soccer</h2>
          <h3>English Premier League</h3>
        </div>
        <div className="menu-wrapper">
          <ul>
            <li>
              <BiSearchAlt className="ic-search" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default index;
