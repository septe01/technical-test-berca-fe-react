import { LIGA } from "../utils/Constants";

//Init Reducer
const initialState = {
  listDataLiga : [],
};

export const listLiga = (state = initialState, action:any) => {
  switch (action.type) {
    case `${LIGA}_F`:
      return {
        listDataLiga: action.payload.res.data.teams
      };
    default:
      return state;
  }
};
