import constantsTypes from '../constants-types/constants-type';

export function mapOrderPricePlus(id) {
    return {
        type: constantsTypes.shoppingBagPlus,
        payload: {
            id: id
        }
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
