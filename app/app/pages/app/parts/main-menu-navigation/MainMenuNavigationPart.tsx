import * as React from "react";
import './MainMenuNavigationPart.scss';
import Link from "../../../../../../common/components/link/Link";

interface IProps {
    event?: (data: string) => void;
}

interface IState {
    currentLink: string;
}

export default class MainMenuNavigationPart extends React.Component<IProps, IState> {
    navigationLinks: any[];
    clothesAndAccessoriesLinks: any[];

    constructor(props) {
        super(props);

        this.state = {
            currentLink: 'clothesAndAccessories'
        };

        //#region navigationLinks
        this.navigationLinks = [
            {
                title: 'Одежда и аксессуары',
                name: 'clothesAndAccessories',
                event: this.onEvent.bind(this)
            },
            {
                title: 'Обувь',
                name: 'footwear',
                event: this.onEvent.bind(this)
            },
            {
                title: 'Украшения',
                name: 'decorating',
                event: this.onEvent.bind(this)
            },
            {
                title: 'Красота и здоровье',
                name: 'beautyAndHealth',
                event: this.onEvent.bind(this)
            },
            {
                title: 'Товары для дома',
                name: 'houseGoods',
                event: this.onEvent.bind(this)
            },
            {
                title: 'Товары для кухни',
                name: 'kitchenGoods',
                event: this.onEvent.bind(this)
            }];
        //#endregion

        //#region clothesAndAccessoriesLinks
        this.clothesAndAccessoriesLinks = [
            {
                title: 'Женская одежда',
                name: 'womenClothing'
            },
            {
                title: 'Мужская одежда',
                name: 'menClothing'
            },
            {
                title: 'Аксессуары',
                name: 'accessories'
            }];
        //#endregion
    }

    onEvent(name) {
        if (this.props.event) {
            this.props.event(name);
        }

        this.setState({
            currentLink: name
        });
    }

    render() {
        return (
            <div className={'main-menu-navigation-container'}>
                <div className={'main-menu-navigation'}>
                    <div className={'main-menu-navigation-wrapper'}>
                        <ul className={'navigation-links-container'}>
                            {this.renderNavigationLinks()}
                        </ul>
                    </div>
                </div>
                <div className={'main-menu-rest-links'}>
                    <div className={'main-menu-rest-links-wrapper'}>
                        <ul className={'rest-links-container'}>
                            {this.renderRestLinks()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    renderNavigationLinks() {
        return this.navigationLinks.map((item, index) => {
            return (
                <li key={index} className={'navigation-link-item'}>
                    <Link name={item.name} event={item.event} className={`navigation-link ${this.state.currentLink === item.name ? 'navigation-link-active' : ''}`}>{item.title}</Link>
                </li>
            );
        });
    }

    renderRestLinks() {
        let restLinks = this.state.currentLink === 'clothesAndAccessories' ? this.clothesAndAccessoriesLinks : null;

        if (restLinks) {
            return restLinks.map((item, index) => {
                return (
                    <li key={index} className={'rest-link-item'}>
                        <Link name={item.name} className={'rest-link'}>{item.title}</Link>
                    </li>
                );
            });
        }
    }
}
