/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listLiga } from "../_actions/laligaAction";

//football app
const Liga = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state?.getDataList?.listDataLiga);

  useEffect(() => {
    dispatch(listLiga());
  }, []);
  return (
    <div className="container-card-liga">
      {data &&
        data.map((i: any, k: any) => {
          return (
            <div className="card-wrapper" key={k}>
              <img src={i.strTeamBadge} alt={i.strTeam} />
              <div className="content">
                <div className="titile-wrapper">
                  <img
                    src={`https://www.thesportsdb.com/images/icons/flags/shiny/16/England.png`}
                    alt={`English Premier League`}
                  />
                  <h2>{i.strTeam}</h2>
                </div>
                <span>
                  {i.strDescriptionEN.length >= 150
                    ? `${i.strDescriptionEN.substr(0, 250)}...`
                    : i.strDescriptionEN}
                </span>
                <Link to="/liga-soccer/detail">
                  <span className="more">detail</span>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Liga;
