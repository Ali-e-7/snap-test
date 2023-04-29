import React from "react";
import { mdiHomeOutline, mdiReceiptTextOutline , mdiAccountOutline } from '@mdi/js';
import Icon from '@mdi/react';
import './style.scss'
import { useHistory } from "react-router-dom";
const Footer = () =>  {

	const history = useHistory()

	const handleRedirect = () => history.push("/home")

        return <div className="footer">
            <button onClick={handleRedirect} className="footer__btn home-btn">
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


export default Footer
