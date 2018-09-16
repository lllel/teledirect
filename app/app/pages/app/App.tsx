import * as React from "react";
import "./App.scss";
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import history from '../../../../core/redux/history/history';
import MainMenuNavigationPart from "./parts/main-menu-navigation/MainMenuNavigationPart";
import MainMenuIntroPart from "./parts/main-menu-intro/MainMenuIntroPart";
import MainMenuSearchPart from "./parts/main-menu-search/MainMenuSearchPart";
import ShoppingBagPage from "../../../shopping_bag/pages/shopping_bag-page/ShoppingBagPage";
import MainFooterPart from "./parts/main-footer/MainFooterPart";
import {changeCurrentUser} from "../../../../core/redux/action-create/actionCreate";

interface IProps {
    changeCurrentUser: (user) => void;
}

interface IState {
}

class App extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    showNotFound() {
        return <h2>Not Found!</h2>
    }

    componentDidMount() {
        this.props.changeCurrentUser('Анастасия');
    }

    render() {
        return (
            <Router history={history}>
                <div className={'app'}>
                    <div className={'sticky-footer'}>
                        <div className={'main-menu-container'}>
                            <MainMenuIntroPart/>
                            <MainMenuSearchPart/>
                            <MainMenuNavigationPart/>
                        </div>
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

export default connect((store) => {
    return {
        currentUser: store.currentUser
    };
}, {changeCurrentUser})(App);
