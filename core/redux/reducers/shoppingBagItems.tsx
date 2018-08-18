import constantsTypes from '../constants-types/constants-type';
import {goodsInShoppingBag} from '../../../app/app/data/data';

//state - начальное состояние
//action - как будем менять начальное состояние

let goodsInShoppingBagCopy = JSON.parse(JSON.stringify(goodsInShoppingBag));

export default function shoppingBagItem(state = goodsInShoppingBagCopy, action){
    const {type, payload} = action;

    switch (type) {
        case constantsTypes.shoppingBagItems:
            return state;

        case constantsTypes.shoppingBagPlus:
            return goodsInShoppingBagCopy.map((item, index) => {
                if (item.id === payload.id) {
                    item.count = (parseInt(item.count, 10) + 1) + '';
                    item.price = parseInt(item.price, 10) + parseInt(goodsInShoppingBag[index].price, 10) + '';
                }

                return item;
            });

        case constantsTypes.shoppingBagMinus:
            return goodsInShoppingBagCopy.map((item, index) => {
                if (item.id === payload.id && parseInt(item.count, 10) > 1) {
                    item.count = (parseInt(item.count, 10) - 1) + '';
                    item.price = parseInt(item.price, 10) - parseInt(goodsInShoppingBag[index].price, 10) + '';
                }

                return item;
            });

        case constantsTypes.shoppingBagDelete:
            const goodsInShoppingBagCopyFiltered = goodsInShoppingBagCopy.filter((item) => {
                if (item.id !== payload.id) {
                    return item;
                }
            });

            goodsInShoppingBagCopy = JSON.parse(JSON.stringify(goodsInShoppingBagCopyFiltered));

            return goodsInShoppingBagCopy;
    }

    return state;
}
