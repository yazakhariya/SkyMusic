import React, { useState } from "react";
import logo from '../../../img/logo.png';
import darklogo from '../../../img/icon/logo-black.png';
import NavBurger from '../nav-burger';
import NavMenu from '../nav-menu';
import s from './main-navigation.module.css';

function NavigationMenu({ loggedIn, theme, setNavActive, navActive }) {
    const [dropdownState, setDropdownState] = useState(false);

    const handleDropdownClick = () => {
          setNavActive(true);
          setDropdownState(!dropdownState);
          if(navActive){
            setDropdownState(false);
            setNavActive(false);
          }
    };

    return (
      <nav className={!navActive ? s.main__nav : s.main__nav_active}>
            <div className={s.nav__logo}>
              <img alt='Логотип' className={s.logo__image} src={theme === 'dark' ? logo : darklogo}/>
            </div> 
            <NavBurger onClick={handleDropdownClick} />
            {dropdownState && (<NavMenu  loggedIn={loggedIn} />)}        
      </nav>
    )
}

export default NavigationMenu;