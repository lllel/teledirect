import {combineReducers} from "redux";
import {routerReducer} from 'react-router-redux';
import shoppingBagItems from './shoppingBagItems';
import currentUser from './currentUser';

export default combineReducers({
    // router: routerReducer,
    shoppingBagItems, currentUser
});
