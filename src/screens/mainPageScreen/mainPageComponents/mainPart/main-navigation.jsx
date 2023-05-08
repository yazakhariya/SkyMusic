import React, { useState } from "react";
import logo from '../../../img/logo.png';
import darklogo from '../../../img/icon/logo-black.png';
import NavBurger from '../nav-burger';
import NavMenu from '../nav-menu';
import s from './main-navigation.module.css';

function NavigationMenu({ loggedIn, theme }) {
    const [dropdownState, setDropdownState] = useState(false);

    const handleDropdownClick = () => setDropdownState(!dropdownState);

    return (
        <nav className={s.main__nav}>
            <div className={s.nav__logo}>
              <img alt='Логотип' className={s.logo__image} src={theme === 'dark' ? logo : darklogo}/>
            </div> 
            <NavBurger onClick={handleDropdownClick} />
            {dropdownState && (<NavMenu loggedIn={loggedIn} /> )}        
          </nav>
    )
}

export default NavigationMenu;