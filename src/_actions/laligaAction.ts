import axios from 'axios'
import { LIGA, LIGA_DETAIL } from '../utils/Constants';
import { actionFulfilled, actionPending, actionRejected } from '../utils/handller';

//Make Action
export const listLiga = () => {
    return (dispatch: (arg0: { type: any; payload?: any; }) => void) => {
          dispatch(actionPending(`${LIGA}_P`))
          axios({
              method: "GET",
              url: `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`,
          })
          .then(res => {
                  dispatch(actionFulfilled(`${LIGA}_F`, { res }));
          })
          .catch(err => {
                  dispatch(actionRejected(`${LIGA}_R`, err));
          });
    }
}  

//Make Action detail liga
export const detailLiga = (idLiga:String,path:String) => {
  if(idLiga){
    return (dispatch: (arg0: { type: any; payload?: any; }) => void) => {
          dispatch(actionPending(`${LIGA_DETAIL}_P`))
          axios({
              method: "GET",
              url: ` https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLiga}`,
          })
          .then(res => {
                  dispatch(actionFulfilled(`${LIGA_DETAIL}_F`, { res,path }));
          })
          .catch(err => {
                  dispatch(actionRejected(`${LIGA_DETAIL}_R`, err));
          });
    }
  }else{
    return (dispatch: (arg0: { type: any; payload?: any; }) => void) => {
        dispatch(actionFulfilled(`BACK_F`, { path }));
    }
  }

}  
