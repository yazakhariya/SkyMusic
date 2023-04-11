import React, { useState } from "react";
import logo from '../../../img/logo.png';
import NavBurger from '../nav-burger';
import NavMenu from '../nav-menu';

function NavigationMenu() {
    const [dropdownState, setDropdownState] = useState({ open: false });

    const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });

    return (
        <nav className="main__nav ">
            <div className="nav__logo logo">
              <img alt='Логотип' className='logo__image' src={logo}/>
            </div> 
            <NavBurger onClick={handleDropdownClick} />
            {dropdownState.open && (<NavMenu /> )}        
          </nav>
    )
}

export default NavigationMenu;