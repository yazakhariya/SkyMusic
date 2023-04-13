import React from 'react';
import luna from '../../img/icon/Group 48096406.png';
import s from './nav-menu.module.css';

function NavMenu() {
    return (
        <div className={s.nav__menu}>
            <ul className={s.menu__list}>
                <li className={s.menu__item}><a href="http://" className={s.menu__link}>Главное</a></li>
                <li className={s.menu__item}><a href="http://" className={s.menu__link}>Мой плейлист</a></li>
                <li className={s.menu__item}><a href="http://" className={s.menu__link}>Войти</a></li>
                <div>
                    <img alt='Night Mode' src={luna}/>
                </div> 
            </ul>
        </div>
    )
}

export default NavMenu;