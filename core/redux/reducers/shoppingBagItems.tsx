import constantsTypes from '../constants-types/constants-type';
import {goodsInShoppingBag} from '../../../app/app/data/data';
import {arrToMap} from '../../helpers/helpers';

const {Record} = require('immutable');

//state - начальное состояние
//action - как будем менять начальное состояние

let goodsInShoppingBagCopy = JSON.parse(JSON.stringify(goodsInShoppingBag));

const RecordState = Record({
    id: '',
    code: '',
    color: '',
    count: '',
    description: '',
    img: '',
    price: '',
    size_: ''
});

const RecordDefaultState = Record({
   loading: false,
   loaded: false,
   entities: arrToMap(goodsInShoppingBagCopy, RecordState)
});

const defaultState = new RecordDefaultState();

export default function (state = defaultState, action){
    const {type, payload, randomId} = action;

    switch (type) {
        case constantsTypes.shoppingBagPlus:
            return state.updateIn(['entities', payload.id], (item) => {
                console.log(randomId);

                if (item.get('id') === payload.id) {
                    return item
                        .set('price', (parseInt(item.get('price'), 10) + parseInt(goodsInShoppingBag.find((item => item.id === payload.id)).price)))
                        .set('count', parseInt(item.get('count'), 10) + 1 + '');
                }
            });

        case constantsTypes.shoppingBagMinus:
            return state.updateIn(['entities', payload.id], (item) => {
                if (item.get('id') === payload.id && parseInt(item.get('count'), 10) > 1) {
                    return item
                        .set('price', (parseInt(item.get('price'), 10) - parseInt(goodsInShoppingBag.find((item => item.id === payload.id)).price)))
                        .set('count', parseInt(item.get('count'), 10) - 1 + '');
                }

                return item;
            });

        case constantsTypes.shoppingBagDelete:
            return state.deleteIn(['entities', payload.id]);
    }

    return state;
}
