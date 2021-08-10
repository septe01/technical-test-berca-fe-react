import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";

const index = (props: any) => {
  return (
    <header>
      <nav className="nav-warape">
        <div className="title-subtitle">
          <h2>Futtball</h2>
          <h3>tottenham vs chelsea</h3>
        </div>
        <div className="menu-wrapper">
          <ul>
            <li>
              <a href="http://localhost:3000/la-liga" className="active">
                Next match
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/la-liga">Previous match</a>
            </li>
            <li>
              <BiSearchAlt className="ic-search" />
            </li>
          </ul>
        </div>
        <HiMenuAlt3
          className="ic-menu"
          onClick={() => props.menu(!props.toggle)}
        />
      </nav>
    </header>
  );
};

export default index;
