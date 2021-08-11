import { LIGA_DETAIL } from "../utils/Constants";

//Init Reducer
const initialState = {
  dataDetailLiga : [],
  path:''
};
export const detailLiga = (state = initialState, action:any) => {
  switch (action.type) {
    case `${LIGA_DETAIL}_F`:
      return {
        dataDetailLiga: action.payload.res.data.leagues,
        path:action.payload.path
      };
    case `BACK_F`:
      return {
        path:action.payload.path
      };
    default:
      return state;
  }
};