//Isi Dari Func atau

import { LIGA } from "../utils/Constants";

//Init Reducer
const initialState = {
  listDataLiga : []
};

const listLiga = (state = initialState, action:any) => {
  switch (action.type) {
    case `${LIGA}_F`:
      return {
        listDataLiga: action.payload.res.data.teams
      };
    default:
      return state;
  }
};

export default listLiga;