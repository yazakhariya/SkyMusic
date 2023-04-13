import React from "react";
import s from './nav-burger.module.css';

function NavBurger(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className={s.nav__burger}>
            <span className={s.burger__line}></span>
            <span className={s.burger__line}></span>
            <span className={s.burger__line}></span>
        </div>    
    )
}

export default NavBurger;