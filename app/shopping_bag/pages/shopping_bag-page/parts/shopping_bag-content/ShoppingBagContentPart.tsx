import * as React from "react";
import './ShoppingBagContentPart.scss';

interface IProps {
    onSetOrderPrice?: (price) => void;
    onSetCountGoodsInShoppingBag?: (count) => void;
}

interface IState {
    newGoodsInShoppingBag: any[];
}

export default class ShoppingBagContentPart extends React.Component<IProps, IState> {
    goodsInShoppingBag: any[];
    newGoodsInShoppingBag: any[];

    constructor(props) {
        super(props);

        //#region goodsInShoppingBag
        this.goodsInShoppingBag = [
            {
                id: '1',
                img: require('./content/img/1.png'),
                description: 'Платье-миди с расклешенной юбкой',
                code: '82039-11',
                size: '44',
                color: 'синий',
                count: '1',
                price: '2450'
            },
            {
                id: '2',
                img: require('./content/img/2.png'),
                description: 'Туфли женские украшенные курживными вставками',
                code: '13524-01',
                size: '38',
                color: 'чёрный',
                count: '1',
                price: '2450'
            },
            {
                id: '3',
                img: require('./content/img/3.png'),
                description: 'Платье-миди',
                code: '75039',
                size: '44',
                color: 'белый',
                count: '1',
                price: '2450'
            },
            {
                id: '4',
                img: require('./content/img/1.png'),
                description: 'Платье-миди',
                code: '75039',
                size: '46',
                color: 'белый',
                count: '1',
                price: '2450'
            }
        ];
        //#endregion

        this.newGoodsInShoppingBag = JSON.parse(JSON.stringify(this.goodsInShoppingBag));

        this.state = {
            newGoodsInShoppingBag: this.newGoodsInShoppingBag
        }
    }

    getOrderPrice() {
        let price = 0;

        this.newGoodsInShoppingBag.forEach((item) => {
            price += parseInt(item.price, 10);
        });

        return price + '';
    }

    getCountGoods() {
        let count = 0;

        this.newGoodsInShoppingBag.forEach((item) => {
            count += parseInt(item.count, 10);
        });

        return count + '';
    }

    onGoodPlusClick(id) {
        this.newGoodsInShoppingBag.forEach((item, index) => {
            if (item.id === id) {
                item.count = parseInt(item.count, 10) + 1;
                item.price = parseInt(item.price, 10) + parseInt(this.goodsInShoppingBag[index].price, 10) + '';
            }
        });

        this.setState({
            newGoodsInShoppingBag: this.newGoodsInShoppingBag
        });

        if (this.props.onSetOrderPrice) {
            this.props.onSetOrderPrice(this.getOrderPrice());
        }

        if (this.props.onSetCountGoodsInShoppingBag) {
            this.props.onSetCountGoodsInShoppingBag(this.getCountGoods())
        }
    }

    onGoodMinusClick(id) {
        this.newGoodsInShoppingBag.forEach((item, index) => {
            if (item.id === id && parseInt(item.count, 10) > 1 ) {
                item.count = parseInt(item.count, 10) - 1;
                item.price = parseInt(item.price, 10) - parseInt(this.goodsInShoppingBag[index].price, 10) + '';
            }
        });

        this.setState({
            newGoodsInShoppingBag: this.newGoodsInShoppingBag
        });

        if (this.props.onSetOrderPrice) {
            this.props.onSetOrderPrice(this.getOrderPrice());
        }

        if (this.props.onSetCountGoodsInShoppingBag) {
            this.props.onSetCountGoodsInShoppingBag(this.getCountGoods())
        }
    }

    onGoodItemRemoveClick(id) {
        this.newGoodsInShoppingBag.forEach((item, index) => {
            if (item.id === id) {
                this.newGoodsInShoppingBag.splice(index, 1);
            }
        });

        this.setState({
            newGoodsInShoppingBag: this.newGoodsInShoppingBag
        });

        if (this.props.onSetOrderPrice) {
            this.props.onSetOrderPrice(this.getOrderPrice());
        }

        if (this.props.onSetCountGoodsInShoppingBag) {
            this.props.onSetCountGoodsInShoppingBag(this.getCountGoods())
        }
    }

    componentDidMount() {
        if (this.props.onSetOrderPrice) {
            this.props.onSetOrderPrice(this.getOrderPrice());
        }

        if (this.props.onSetCountGoodsInShoppingBag) {
            this.props.onSetCountGoodsInShoppingBag(this.getCountGoods())
        }
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
        return this.newGoodsInShoppingBag.map((item, index) => {
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
