import React from "react";
import "./style.scss";
import Icon from "@mdi/react";
import { NavLink } from "react-router-dom";
import { mdiChevronRight, mdiCartOutline,mdiChevronDown } from "@mdi/js";
const Header = () => {
    return <div className="header">
            
    <NavLink to="/">
    <Icon path={mdiChevronRight} size={1.1} color="#404040" className='search__icon' />
    </NavLink>

    <div className="selected-map">
        <span>آدرس خود را انتخاب کنید</span>
        <Icon path={mdiChevronDown} size={0.9} color="#bd272d" className='search__icon' />

    </div>
    <Icon path={mdiCartOutline} size={1.1} color="#404040" className='search__icon' />

</div>
};
export default Header
