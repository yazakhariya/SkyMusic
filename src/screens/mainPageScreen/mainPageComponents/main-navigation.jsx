import React from "react";
import logo from '../../img/logo.png';
import NavBurger from './nav-burger';
import NavMenu from './nav-menu';

function NavigationMenu() {
    return (
        <nav className="main__nav nav">
            <div className="nav__logo logo">
              <img alt='Логотип' className='logo__image' src={logo}/>
            </div>
            <NavBurger />
            <NavMenu />       
          </nav>
    )
}

export default NavigationMenu;