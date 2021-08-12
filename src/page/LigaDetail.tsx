/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { handlePath } from "../_actions/handlerActions";
import { detailLiga } from "../_actions/laligaAction";

const LigaDetail = (props: any) => {
  const location = useLocation();
  // const { from, idLiga }: any = location.state;
  const { idLiga }: any = location?.state || 0;
  const dispatch = useDispatch();
  const detailLigaData = useSelector((state: any) => state?.detailLiga);
  console.log(detailLigaData);

  useEffect(() => {
    document.title = "LIGA SOCCER | Detail";
    if (idLiga) {
      dispatch(detailLiga(idLiga, "detail-liga"));
      dispatch(handlePath("detail-liga"));
    }
  }, []);

  // when no data id redirect to home
  if (!idLiga) {
    return <Redirect to="/" />;
  }

  return <div>liga detail</div>;
};

export default LigaDetail;
