import * as React from "react";
import './ShoppingBagContentPart.scss';
import {connect} from 'react-redux';
import {
    mapOrderItemDelete, mapOrderPriceMinus,
    mapOrderPricePlus
} from '../../../../../../core/redux/action-create/actionCreate';

interface IProps {
    shoppingBagItems?: any;
    mapOrderPricePlus?: any;
    mapOrderPriceMinus?: any;
    mapOrderItemDelete?: any;
}

interface IState {
}

class ShoppingBagContentPart extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    onGoodPlusClick(id) {
        this.props.mapOrderPricePlus(id);
    }

    onGoodMinusClick(id) {
        this.props.mapOrderPriceMinus(id);
    }

    onGoodItemRemoveClick(id) {
        this.props.mapOrderItemDelete(id);
    }

    render() {
        return (
            <div className={'shopping-bag-wrapper'}>
                <table className={'shopping-bag-table'}>
                    <thead>
                        <tr>
                            <td>Товар</td>
                            <td>Описание</td>
                            <td className={'shopping-bag-thead-count'}>Количество</td>
                            <td className={'shopping-bag-thead-price'}>Цена</td>
                            <td className={'shopping-bag-thead-delete'}>Удалить</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGoodsInShoppingBag()}
                    </tbody>
                </table>
            </div>
        );
    }

    renderGoodsInShoppingBag() {
        return this.props.shoppingBagItems.map((item, index) => {
           return (
               <tr key={index}>
                   <td className={'shopping-bag-img'}>
                       <img src={item.img} width="178" height="178" alt="product"/>
                   </td>
                   <td className={'shopping-bag-description'}>
                       <p className={'shopping-bag-product-description'}>{item.description}</p>
                       <p className={'shopping-bag-code'}>Код: {item.code}</p>
                       <p>Размер: {item.size} <span>Цвет: {item.color}</span></p>
                   </td>
                   <td className={'shopping-bag-count'}>
                       <button className={'shopping-bag-good-delete'} onClick={() => {this.onGoodMinusClick(item.id)}}>-</button>
                       <span className={'shopping-bag-good-count'}>{item.count}</span>
                       <button className={'shopping-bag-good-add'} onClick={() => {this.onGoodPlusClick(item.id)}}>+</button>
                   </td>
                   <td className={'shopping-bag-price'}>{item.price} руб.</td>
                   <td className={'shopping-bag-delete'}>
                       <button onClick={() => {this.onGoodItemRemoveClick(item.id)}}/>
                   </td>
               </tr>
           );
        });
    }
}

// connect - метод через который можно достать что то из store
// mapOrderPriceFromStore - возвращает то, что нужно достать из store (в объекте пропсы)
// mapOrderPrice - передаётся вторым аргументом в connect, поэтому автоматически попадает в dispatch (this.props.dispatch({price: getOrderPrice()})). {getOrderPrice} вместо getOrderPrice потому что нужно передать объект, типа {orderPrice: getOrderPrice}. Деструктуризация
// price - текущий state из store

// function mapOrderPriceFromStore(store) {
//     return {
//       price: store.orderPrice,
//       t: 'aaaaaaaaaaaa'
//     };
// }

export default connect((store) => {
    return {
        shoppingBagItems: store.shoppingBagItems
    };
}, {mapOrderPricePlus, mapOrderPriceMinus, mapOrderItemDelete})(ShoppingBagContentPart);
