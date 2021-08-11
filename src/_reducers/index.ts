import {combineReducers} from 'redux'

//persist
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistReducer} from 'redux-persist'

//Insert Reducers
import { listLiga } from "./laligaReducer";
import { detailLiga } from "./detailLigaReducer";
// import otherReducer from "./otherReducer";


//setup persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['listLiga']
}

const rootReducer = combineReducers({
  getDataList: persistReducer(persistConfig,listLiga),
  detailLiga
  // otherReducer //if you don't want reducer to save persist you can place just it
})

export default rootReducer