/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listLiga } from "../_actions/laligaAction";

//football app
const Liga = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => console.log(state?.getDataList));
  useEffect(() => {
    dispatch(listLiga());
  }, []);
  return <div>Liga</div>;
};

export default Liga;
