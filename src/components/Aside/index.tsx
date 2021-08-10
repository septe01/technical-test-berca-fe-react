import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const index = ({ toggle }: any) => {
  return (
    // <div className={`container-aside`}>
    <div className={`container-aside ${toggle && `toggle-active`}`}>
      <div className="menu-wrapper">
        <ul>
          <li>
            <a href="http://localhost:3000/la-liga">Next match</a>
          </li>
          <li className="active">
            <a href="http://localhost:3000/la-liga">Previous match</a>
          </li>
          <li className="search-event">
            <div className="input-wrap">
              <input type="text" />
              <BiSearchAlt className="ic-search" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
