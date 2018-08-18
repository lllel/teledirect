import {createStore} from "redux";
import combineReducer from '../reducers/_index';

const store = createStore(combineReducer);

// only dev
(window as any).store = store;

export default store;
