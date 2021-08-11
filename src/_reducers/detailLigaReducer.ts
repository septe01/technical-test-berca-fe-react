import { LIGA_DETAIL } from "../utils/Constants";

//Init Reducer
const initialState = {
  dataDetailLiga : []
};
export const detailLiga = (state = initialState, action:any) => {
  switch (action.type) {
    case `${LIGA_DETAIL}_F`:
      return {
        dataDetailLiga: action.payload.res.data.leagues
      };
    default:
      return state;
  }
};