import * as React from "react";
import './ShoppingBagPage.scss';
import ShoppingBagTitlePart from "./parts/shopping_bag-title/ShoppingBagTitlePart";
import ShoppingBagContentPart from "./parts/shopping_bag-content/ShoppingBagContentPart";
import ShoppingBagBuyPart from "./parts/shopping_bag-buy/ShoppingBagBuyPart";
import ProductItemPart from "./parts/product-item/ProductItemPart";

interface IProps {
    onSetCountGoodsInShoppingBag?: (count) => void;
}

interface IState {
    orderPrice: string;
}

export default class ShoppingBagPage extends React.Component<IProps, IState> {
    similarProducts: any[];

    constructor(props) {
        super(props);

        this.state = {
            orderPrice: '0'
        };

        //#region similarProducts
        this.similarProducts = [
            {
                img: './content/img/1.png',
                description: 'Солнечные очки зеленого цвета в стиле ретро',
                price: '2 450 руб.'
            },
            {
                img: './content/img/4.png',
                description: 'Шляпа',
                price: '800 руб.'
            },
            {
                img: './content/img/5.png',
                description: 'Платье-миди с расклешенной юбкой',
                price: '2 450 руб.'
            },
            {
                img: './content/img/6.png',
                description: 'Платье-миди с расклешенной юбкой',
                price: '2 450 руб.'
            }
        ];
        //#endregion
    }

    onSetOrderPrice(price) {
        this.setState({orderPrice: price});
    }

    onSetCountGoodsInShoppingBag(count) {
        if (this.props.onSetCountGoodsInShoppingBag) {
            this.props.onSetCountGoodsInShoppingBag(count);
        }
    }

    render() {
        return (
            <>
                <ShoppingBagTitlePart title={'Ваша корзина'}/>
                <ShoppingBagContentPart onSetOrderPrice={this.onSetOrderPrice.bind(this)} onSetCountGoodsInShoppingBag={this.onSetCountGoodsInShoppingBag.bind(this)}/>
                <ShoppingBagBuyPart orderPrice={this.state.orderPrice}/>
                <ShoppingBagTitlePart title={'Добавьте к вашему заказу'}/>
                <div className={'similar-products-container'}>
                    {this.renderSimilarProducts()}
                </div>

            </>
        );
    }

    renderSimilarProducts() {
        return this.similarProducts.map((item, index) => {
            return <ProductItemPart key={index} img={require(`${item.img}`)} description={item.description} price={item.price}/>
        })
    }
}
