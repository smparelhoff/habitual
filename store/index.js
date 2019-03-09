import { createStore, combineReducers, applyMiddleware } from "redux";
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import habits from './habits'

const reducer = combineReducers({habits: habits});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
