import * as React from "react";
import './MainFooterPart.scss';
import Link from "../../../../../../common/components/link/Link";

interface IProps {
}

interface IState {
}

export default class MainFooterPart extends React.Component<IProps, IState> {
    socialLinks: any[];
    catalogLinks: any[];
    orderLinks: any[];
    shop24Links: any[];
    informationLinks: any[];

    constructor(props) {
        super(props);

        //#region socialLinks
        this.socialLinks = [
            require('./content/img/Vkontakte.png'),
            require('./content/img/Facebook.png'),
            require('./content/img/odnoklassniki.png'),
            require('./content/img/Pin.png'),
            require('./content/img/Pinterest.png'),
            require('./content/img/Instagram.png'),
            require('./content/img/Youtube2.png')
        ];
        //#endregion

        //#region catalogLinks
        this.catalogLinks = [
            {title: 'Одежда и аксессуары'},
            {title: 'Обувь'},
            {title: 'Украшения'},
            {title: 'Красота и здоровье'},
            {title: 'Товары для дома, дачи и отдыха'},
            {title: 'Товары для кухни'}
        ];
        //#endregion

        //#region orderLinks
        this.orderLinks = [
            {title: 'Оплата и доставка'},
            {title: 'Возврат'},
            {title: 'Помощь'},
            {title: 'Благотворительный фонд Константина Хабенского'},
            {title: 'Гарантия на дополнительное обслуживание товара'},
            {title: 'Пользовательское соглашение'}
        ];
        //#endregion

        //#region shop24Links
        this.shop24Links = [
            {title: 'Смотреть прямой эфир'},
            {title: 'Расписание передач'},
            {title: 'Акции'},
            {title: 'Личный кабинет'},
            {title: 'Поиск и карта сайта'},
            {title: 'Карта брендов'},
            {title: 'Обратная связь'}
        ];
        //#endregion

        //#region informationLinks
        this.informationLinks = [
            {title: 'О канале'},
            {title: 'Сотрудничество'},
            {title: 'Покупайте с нами'},
            {title: 'Контакты'}
        ];
        //#endregion
    }

    render() {
        return (
            <div className={'main-footer-container'}>
                <div className={'main-footer-socials'}>
                    <p className={'main-footer-socials-info'}>SHOP24 в социальных сетях:</p>
                    <ul>
                        {this.renderSocialLinks()}
                    </ul>
                </div>
                <div className={'main-footer-offers'}>
                    <div className={'main-footer-offers-wrapper'}>
                        <Link href={'#'}>
                            <img src={require('./content/img/logo2.png')} width="100" height="60" alt="logo"/>
                        </Link>
                        <div className={'main-footer-phones'}>
                            <p className={'main-footer-phone'}>8 (800) 500-75-55*</p>
                            <p className={'main-footer-phone-description'}>*Бесплатный звонок по всей России</p>
                            <p className={'main-footer-phone'}>8 (495) 733-96-03</p>
                        </div>
                        <div className={'main-footer-links-container'}>
                            <ul>
                                <li className={'main-footer-list-title'}>Каталог товаров</li>
                                {this.renderListLinks(this.catalogLinks)}
                            </ul>
                            <ul>
                                <li className={'main-footer-list-title'}>Заказ</li>
                                {this.renderListLinks(this.orderLinks)}
                            </ul>
                            <ul>
                                <li className={'main-footer-list-title'}>Shop24</li>
                                {this.renderListLinks(this.shop24Links)}
                            </ul>
                            <ul>
                                <li className={'main-footer-list-title'}>Информация</li>
                                {this.renderListLinks(this.informationLinks)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={'main-footer-copyright'}>
                    <p>Copyright © Товар ООО «Стиль и Мода», 2014-2016. Все права защищены.</p>
                    <p>При использовании материалов сайта ссылка на www.shop24.com обязательна.</p>
                    <p>115193, Москва, ул. Кожуховская 5-я, д. 9, помещение VII</p>
                    <p>Телефон  8 800 500-75-55</p>
                </div>
            </div>
        );
    }

    renderSocialLinks() {
        return this.socialLinks.map((item, index) => {
            return (
                <li key={index} className={'main-footer-social-item'}>
                    <Link className={'main-footer-social-link'} href={'#'}>
                        <img src={item} alt="socialImg"/>
                    </Link>
                </li>
            )
        });
    }

    renderListLinks(links) {
        return links.map((item, index) => {
            return (
                <li key={index} className={'main-footer-list-item'}>
                    <Link>{item.title}</Link>
                </li>
            )
        });
    }
}
