import { createStore, combineReducers, applyMiddleware } from "redux";
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import habits from './habits'
import overview from './overview'
import seed from './seed'

const reducer = combineReducers({habits: habits, overview: overview});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
);

// seed()
// createLogger() 

export default store;

// 