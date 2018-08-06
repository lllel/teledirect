import * as React from "react";
import './MainMenuIntroPart.scss';
import Link from "../../../../../../common/components/link/Link";

const blogImg = require('./content/img/blog.png');
const youtubeImg = require('./content/img/youtube.png');
const playImg = require('./content/img/play.png');

interface IProps {
}

interface IState {
}

export default class MainMenuIntroPart extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'main-menu-intro'}>
                <div className={'main-menu-intro-wrapper'}>
                    <p className={'main-menu-intro-phone'}>8 (800) 500-75-55 <span>Бесплатный звонок по России</span></p>
                    <div className={'main-menu-intro-container-links'}>
                        <Link className={'social-intro-link'} href={'#'}>
                            <img src={blogImg} width="31" height="31" alt="blog"/>
                            <span>Звёздный блог</span>
                        </Link>
                        <Link className={'social-intro-link'} href={'#'}>
                            <img src={youtubeImg} width="57" height="23" alt="youtube"/>
                            <span>Смотрите нас на YouTube</span>
                        </Link>
                        <Link className={'social-intro-link'} href={'#'}>
                            <img src={playImg} width="31" height="23" alt="play"/>
                            <span>Смотрите наш прямой эфир</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
