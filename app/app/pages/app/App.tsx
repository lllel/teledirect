import * as React from "react";
import "./App.scss";
import MainMenuNavigationPart from "./parts/main-menu-navigation/MainMenuNavigationPart";
import MainMenuIntroPart from "./parts/main-menu-intro/MainMenuIntroPart";
import MainMenuSearchPart from "./parts/main-menu-search/MainMenuSearchPart";
import ShoppingBagPage from "../../../shopping_bag/pages/shopping_bag-page/ShoppingBagPage";
import MainFooterPart from "./parts/main-footer/MainFooterPart";

interface IProps {
}

interface IState {
    currentPage: string;
    countGoodsInShoppingBag: string;
    currentUser: string;
}

export default class App extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: "clothesAndAccessories",
            countGoodsInShoppingBag: '0',
            currentUser: 'Анастасия'
        };
    }

    onEvent(name) {
        this.setState({
            currentPage: name
        });
    }

    onSetCountGoodsInShoppingBag(count) {
        this.setState({countGoodsInShoppingBag: count});
    }

    render() {
        return (
            <div className={'app'}>
                <div className={'sticky-footer'}>
                    <div className={'main-menu-container'}>
                        <MainMenuIntroPart/>
                        <MainMenuSearchPart currentUser={this.state.currentUser} countGoodsInShoppingBag={this.state.countGoodsInShoppingBag}/>
                        <MainMenuNavigationPart event={this.onEvent.bind(this)}/>
                    </div>
                    {this.state.currentPage === 'clothesAndAccessories' ? <ShoppingBagPage onSetCountGoodsInShoppingBag={this.onSetCountGoodsInShoppingBag.bind(this)}/> : null}
                </div>
                <MainFooterPart/>
            </div>
        );
    }
}


