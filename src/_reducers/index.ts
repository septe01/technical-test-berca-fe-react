import {combineReducers} from 'redux'

//persist
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistReducer} from 'redux-persist'

//Insert Reducers
import listR from "./laligaReducer";
// import otherReducer from "./otherReducer";


//setup persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['listR']
}

const rootReducer = combineReducers({
  getDataList: persistReducer(persistConfig,listR),
  // otherReducer //if you don't want reducer to save persist you can place just it
})

export default rootReducer