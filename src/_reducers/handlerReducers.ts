//Init Reducer
const initialState = {
  path:''
};
export const handlePath = (state = initialState, action:any) => {
  switch (action.type) {
    case `PATH_F`:
      return {
        path:action.payload.path
      };
    default:
      return state;
  }
};