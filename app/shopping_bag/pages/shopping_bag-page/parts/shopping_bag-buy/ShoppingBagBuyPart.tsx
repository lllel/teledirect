import * as React from "react";
import './ShoppingBagBuyPart.scss';
import {InputText} from "../../../../../../common/components/input_text/InputText";

interface IProps {
    orderPrice?: string;
}

interface IState {
    hasPromocode: boolean;
}

export default class ShoppingBagBuyPart extends React.Component<IProps, IState> {
    inputRef: InputText;
    promocode: string;
    promocodeDiscount: number;

    constructor(props) {
        super(props);

        this.state = {
            hasPromocode: false
        };

        this.promocode = '123456';
        this.promocodeDiscount = 1800;
    }

    onSetPromocodeClick() {
        if (this.inputRef.getValue() === this.promocode) {
            this.setState({hasPromocode: true});

        } else {
            this.setState({hasPromocode: false});
        }
    }


    calculateDiscount() {
        if (this.state.hasPromocode && parseInt(this.props.orderPrice, 10) > this.promocodeDiscount) {
            return parseInt(this.props.orderPrice, 10) - this.promocodeDiscount;
        }

        if (this.state.hasPromocode && parseInt(this.props.orderPrice, 10) <= this.promocodeDiscount) {
            return 0;
        }

        return this.props.orderPrice;
    }

    render() {
        return (
            <div className={'shopping-bag-buy-wrapper'}>
                <div className={'shopping-bag-promocode-container'}>
                    <p className={'shopping-bag-promocode-title'}>Есть промокод?</p>
                    <InputText ref={(r) => this.inputRef = r} className={'shopping-bag-promocode-input'} placeholder={'Введите промокод'}/>
                    <button className={'shopping-bag-promocode-button'} onClick={this.onSetPromocodeClick.bind(this)}>Применить</button>
                </div>
                <div className={'shopping-bag-order-price-container'}>
                    <table className={'shopping-bag-order-price-table'}>
                        <tbody>
                            <tr>
                                <td className={'shopping-bag-order-price-title'}>Сумма заказа:</td>
                                <td className={'shopping-bag-order-price-amount'}>{this.props.orderPrice} руб.</td>
                            </tr>
                            <tr>
                                <td className={`${this.state.hasPromocode ? 'shopping-bag-order-price-promocode' : 'shopping-bag-order-price-promocode promocode-hidden'}`}>Промокод:</td>
                                <td className={`${this.state.hasPromocode ? 'shopping-bag-order-price-amount shopping-bag-order-price-promocode-amount' : 'shopping-bag-order-price-amount shopping-bag-order-price-promocode-amount promocode-hidden' }`}>
                                    -{this.promocodeDiscount} руб.
                                </td>
                            </tr>
                            <tr>
                                <td className={'shopping-bag-order-price-all-amount'}>Всего:</td>
                                <td className={'shopping-bag-order-price-amount'}>{this.calculateDiscount()} руб.</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className={'shopping-bag-order-price-button'}>Оформить заказ</button>
                </div>
            </div>
        );
    }
}
