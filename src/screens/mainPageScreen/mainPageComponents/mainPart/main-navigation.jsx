import React, { useState } from "react";
import logo from '../../../img/logo.png';
import NavBurger from '../nav-burger';
import NavMenu from '../nav-menu';
import s from './main-navigation.module.css';

function NavigationMenu() {
    const [dropdownState, setDropdownState] = useState({ open: false });

    const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });

    return (
        <nav className={s.main__nav}>
            <div className={s.nav__logo}>
              <img alt='Логотип' className={s.logo__image} src={logo}/>
            </div> 
            <NavBurger onClick={handleDropdownClick} />
            {dropdownState.open && (<NavMenu /> )}        
          </nav>
    )
}

export default NavigationMenu;