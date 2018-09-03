import {combineReducers} from "redux";
import shoppingBagItems from './shoppingBagItems';
import loadRandomId from './loadRandomId';

export default combineReducers({
    shoppingBagItems, loadRandomId
});
