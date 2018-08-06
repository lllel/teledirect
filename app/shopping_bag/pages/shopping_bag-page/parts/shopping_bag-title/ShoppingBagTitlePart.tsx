import * as React from "react";
import './ShoppingBagTitlePart.scss';

interface IProps {
    title?: string;
}

interface IState {
}

export default class ShoppingBagTitlePart extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'shopping-bag-title-container'}>
                <h3 className={'shopping-bag-title'}>{this.props.title}</h3>
            </div>
        );
    }
}
