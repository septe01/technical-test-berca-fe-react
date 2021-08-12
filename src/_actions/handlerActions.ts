import { actionFulfilled } from "../utils/handller";

//Make Action
export const handlePath = (path:String) => {
    return (dispatch: (arg0: { type: any; payload?: any; }) => void) => {
        dispatch(actionFulfilled(`PATH_F`, { path }));
    
  }
}  