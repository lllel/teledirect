import constantsTypes from '../constants-types/constants-type';
import {goodsInShoppingBag} from '../../../app/app/data/data';
import history from '../history/history';

let goodsInShoppingBagCopy = JSON.parse(JSON.stringify(goodsInShoppingBag));

export function mapOrderPricePlus(id) {
    history.push('/footwear');

    return {
        type: constantsTypes.shoppingBagPlus,
        payload: {
            id: id
        },
        randomId: true
    };
}

export function mapOrderPriceMinus(id) {
    return {
        type: constantsTypes.shoppingBagMinus,
        payload: {
            id: id
        }
    };
}

export function mapOrderItemDelete(id) {
    return {
        type: constantsTypes.shoppingBagDelete,
        payload: {
            id: id
        }
    };
}

export function changeCurrentUser(user) {
    return {
        type: constantsTypes.currentUser,
        payload: {
            user: user
        }
    };
}

export function loadShoppingBagItems() {
    return (dispatch) => {
        dispatch({
            type: constantsTypes.loadShoppingBagItems + constantsTypes.start,
            shoppingBagData: true
        });

        setTimeout(() => {
            return dispatch({
                type: constantsTypes.loadShoppingBagItems + constantsTypes.success,
                shoppingBagData: goodsInShoppingBagCopy
            });
        }, 2000);
    }
}

// export function loadShoppingBagItems() {
//     return {
//         type: constantsTypes.loadShoppingBagItems,
//         shoppingBagData: true
//     }
// }
