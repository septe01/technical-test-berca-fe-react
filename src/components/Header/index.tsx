/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BiSearchAlt, BiArrowBack } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handlePath } from "../../_actions/handlerActions";
import { useHistory } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const path = useSelector((state: any) => state?.handlePath?.path);

  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      if (location.pathname === "/liga-soccer") {
        dispatch(handlePath(""));
      }
    });
  }, []);

  return (
    <header>
      <nav className="nav-warape">
        <div className="title-subtitle">
          <Link to="/">
            <h2>
              {path === "detail-liga" && (
                <BiArrowBack
                  className="ic-back"
                  onClick={() => dispatch(handlePath(""))}
                />
              )}
              Soccer
            </h2>
          </Link>

          <h3>
            {path === "detail-liga"
              ? "Detail League"
              : "English Premier League"}
          </h3>
        </div>
        <div className="menu-wrapper">
          <ul>
            <li>
              {path !== "detail-liga" && <BiSearchAlt className="ic-search" />}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Index;
