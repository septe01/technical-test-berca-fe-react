import axios from 'axios'
import { LIGA } from '../utils/Constants';
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
