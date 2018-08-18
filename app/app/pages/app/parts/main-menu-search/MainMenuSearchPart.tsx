import * as React from "react";
import './MainMenuSearchPart.scss';
import {connect} from 'react-redux';
import Link from "../../../../../../common/components/link/Link";
import {InputText} from "../../../../../../common/components/input_text/InputText";

const mainLogo = require('./content/img/logo.png');
const magnifier = require('./content/img/form.png');
const shoppingBag = require('./content/img/shopping-bag.png');
const userOutline = require('./content/img/user-outline.png');

interface IProps {
    shoppingBagItems?: any;
    currentUser?: string;
}

interface IState {
}

class MainMenuSearchPart extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    getCountGoods() {
        let count = 0;

        this.props.shoppingBagItems.forEach((item) => {
            count += parseInt(item.count, 10);
        });

        return count + '';
    }

    render() {
        return (
            <div className={'intro-search'}>
                <div className={'intro-search-wrapper'}>
                    <Link className={'intro-search-logo'} href={'#'}>
                        <img src={mainLogo} width="198" height="60" alt="logo"/>
                    </Link>
                    <div className={'intro-search-input-container'}>
                        <InputText className={'intro-search-input'} placeholder={'Поиск по сайту'}/>
                        <img src={magnifier} width="19" height="19" alt="magnifier"/>
                    </div>
                    <div className={'intro-search-user-bag-container'}>
                        <Link className={'intro-search-user-container'} href={'#'}>
                            <img src={userOutline} width="25" height="25" alt="user-outline"/>
                            <p>{this.props.currentUser}</p>
                        </Link>
                        <Link className={'intro-search-shopping-bag-container'} href={'#'}>
                            <img src={shoppingBag} width="25" height="25" alt="shopping-bag"/>
                            <p>В корзине:<span>{this.getCountGoods() || 0} товар(ов)</span></p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((store => {
    return {
        shoppingBagItems: store.shoppingBagItems
    }
}))(MainMenuSearchPart)
