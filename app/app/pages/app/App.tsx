import * as React from "react";
import "./App.scss";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainMenuNavigationPart from "./parts/main-menu-navigation/MainMenuNavigationPart";
import MainMenuIntroPart from "./parts/main-menu-intro/MainMenuIntroPart";
import MainMenuSearchPart from "./parts/main-menu-search/MainMenuSearchPart";
import ShoppingBagPage from "../../../shopping_bag/pages/shopping_bag-page/ShoppingBagPage";
import MainFooterPart from "./parts/main-footer/MainFooterPart";

interface IProps {
}

interface IState {
    currentPage: string;
    currentUser: string;
}

export default class App extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: "clothesAndAccessories",
            currentUser: 'Анастасия'
        };
    }

    onEvent(name) {
        this.setState({
            currentPage: name
        });
    }

    showNotFound() {
        return <h2>Not Found!</h2>
    }

    render() {
        return (
            <Router>
                <div className={'app'}>
                    <div className={'sticky-footer'}>
                        <div className={'main-menu-container'}>
                            <MainMenuIntroPart/>
                            <MainMenuSearchPart currentUser={this.state.currentUser} />
                            <MainMenuNavigationPart event={this.onEvent.bind(this)}/>
                        </div>
                        {/*{this.state.currentPage === 'clothesAndAccessories' ? <Route path={'/shopping-bag'} component={ShoppingBagPage}/> : null}*/}
                        <Switch>
                            <Route path={'/shopping-bag'} component={ShoppingBagPage} exact={true}/>
                            <Route path={'*'} render={this.showNotFound.bind(this)}/>
                        </Switch>
                    </div>
                    <MainFooterPart/>
                </div>

            </Router>
        );
    }
}
