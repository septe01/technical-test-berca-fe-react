/* eslint-disable import/no-anonymous-default-export */
import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'

import thunk from 'redux-thunk'

import {persistStore} from 'redux-persist'

import rootReducer from '../_reducers'

const middleWares = [thunk,logger]

export default () => {
  let store = createStore(rootReducer,applyMiddleware(...middleWares))
  let persiStore = persistStore(store)
  return {store,persiStore}
}