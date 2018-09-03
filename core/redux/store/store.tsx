import {createStore, applyMiddleware} from "redux";
import combineReducer from '../reducers/_index';
import randomId from '../middlewares/randomId';
import loadRandomId from '../middlewares/loadRandomId';

const middlewares = applyMiddleware(randomId, loadRandomId);
const store = createStore(combineReducer, {}, middlewares);

// only dev
(window as any).store = store;

export default store;
