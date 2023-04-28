import React from "react";
import { mdiHomeOutline, mdiReceiptTextOutline , mdiAccountOutline } from '@mdi/js';
import Icon from '@mdi/react';
import './style.css'
export default class Footer extends React.Component {
    render() {
        return <div className="footer">
            <button className="footer__btn home-btn">
                <Icon path={mdiHomeOutline} size={1.1} className='search__icon' />
                <span>خانه</span>
            </button>
            <button className="footer__btn order-btn">
                <Icon path={mdiReceiptTextOutline } size={1.1} className='search__icon' />
                <span>سفارش ها</span>

            </button>
            <button className="footer__btn profile-btn">
                <Icon path={mdiAccountOutline} size={1.1} className='search__icon' />
                <span>حساب من</span>
            </button>
        </div>
    }
}

