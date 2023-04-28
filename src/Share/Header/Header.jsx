import React from "react";
import './style.css'
import Icon from '@mdi/react';
import { mdiChevronRight,mdiCartOutline } from '@mdi/js';
export default class Header extends React.Component {
    render() {
        return <div className="header">
            <Icon path={mdiChevronRight} size={1.4} color="#404040" className='search__icon' />

            <div className="selected-map">آدرس خود را انتخاب کنید</div>
            <Icon path={mdiCartOutline} size={1.1} color="#404040" className='search__icon' />

        </div>
    }
}
