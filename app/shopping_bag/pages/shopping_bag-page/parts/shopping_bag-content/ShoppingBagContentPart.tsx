import * as React from "react";
import './ShoppingBagContentPart.scss';
import {connect} from 'react-redux';
import {mapToArr} from '../../../../../../core/helpers/helpers';
import {
    loadShoppingBagItems,
    mapOrderItemDelete, mapOrderPriceMinus,
    mapOrderPricePlus
} from '../../../../../../core/redux/action-create/actionCreate';

interface IProps {
    shoppingBagItems?: any;
    mapOrderPricePlus?: any;
    mapOrderPriceMinus?: any;
    mapOrderItemDelete?: any;
    loadShoppingBagItems?: any;
    loading?: any;
    loaded?: any;
}

interface IState {
}

class ShoppingBagContentPart extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       const {loading, loaded} = this.props;

       if (!loading && !loaded) {
           this.props.loadShoppingBagItems();
       }
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
        if (this.props.loading) {
            return (
                <tr>
                    <td className={'shopping-bag-img'}>
                        Loading...
                    </td>
                </tr>
            )}

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

// function mapOrderPriceFromStore(store) {
//     return {
//       price: store.orderPrice,
//       t: 'aaaaaaaaaaaa'
//     };
// }

export default connect((store) => {
    return {
        shoppingBagItems: mapToArr(store.shoppingBagItems.entities),
        loading: store.shoppingBagItems.loading,
        loaded: store.shoppingBagItems.loaded
    };
}, {mapOrderPricePlus, mapOrderPriceMinus, mapOrderItemDelete, loadShoppingBagItems})(ShoppingBagContentPart);
