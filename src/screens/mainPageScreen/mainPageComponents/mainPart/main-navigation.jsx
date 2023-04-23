import React, { useState } from "react";
import logo from '../../../img/logo.png';
import NavBurger from '../nav-burger';
import NavMenu from '../nav-menu';
import s from './main-navigation.module.css';

function NavigationMenu({ loggedIn, setLoggedIn, setUserName }) {
    const [dropdownState, setDropdownState] = useState(false);

    const handleDropdownClick = () => setDropdownState(!dropdownState);

    return (
        <nav className={s.main__nav}>
            <div className={s.nav__logo}>
              <img alt='Логотип' className={s.logo__image} src={logo}/>
            </div> 
            <NavBurger onClick={handleDropdownClick} />
            {dropdownState && (<NavMenu setUserName={setUserName} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> )}        
          </nav>
    )
}

export default NavigationMenu;