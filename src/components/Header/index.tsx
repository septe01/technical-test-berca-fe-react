import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailLiga } from "../../_actions/laligaAction";

const Index = () => {
  const dispatch = useDispatch();
  const detailLigaData = useSelector((state: any) => state?.detailLiga);

  return (
    <header>
      <nav className="nav-warape">
        <div className="title-subtitle">
          <h2>Soccer</h2>

          <h3>
            {detailLigaData?.path === "detail-liga"
              ? "Detail League"
              : "English Premier League"}
          </h3>
        </div>
        <div className="menu-wrapper">
          <ul>
            <li>
              {detailLigaData?.path === "detail-liga" ? (
                <Link to="/">
                  <AiOutlineClose
                    className="ic-search"
                    onClick={() => dispatch(detailLiga("", ""))}
                  />
                </Link>
              ) : (
                <BiSearchAlt className="ic-search" />
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Index;
