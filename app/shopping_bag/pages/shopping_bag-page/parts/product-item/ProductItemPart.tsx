import * as React from "react";
import './ProductItemPart.scss';

interface IProps {
    img?: any;
    description?: string;
    price?: string;
}

interface IState {
}

export default class ProductItemPart extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'product-item-container'}>
                <img src={this.props.img} width="277" height="277" alt="product"/>
                <p className={'product-item-description'}>{this.props.description}</p>
                <p className={'product-item-price'}>{this.props.price}</p>
            </div>
        );
    }
}
