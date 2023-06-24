import { useContext, useEffect } from 'react';
import ThemeContext from './theme-context';
import luna from '../../img/icon/Group 48096406.png';
import sun from '../../img/icon/Group 48096407.png';
import s from './nav-menu.module.css';

function NavMenu({ loggedIn }) {

    const handleLogOut = () => {
        localStorage.setItem('loggedIn', false);
        localStorage.setItem('userName', '');
        window.location.reload();
    }

    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeChanging = () => {     
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {

        document.body.setAttribute('data-theme', theme);

    }, [theme]);

    return (
        <div className={s.nav__menu}>
            <ul className={s.menu__list}>
                <li className={s.menu__item}><a href="http://localhost:3000/main" className={s.menu__link}>Главное</a></li>
                <li className={s.menu__item}><a href="http://localhost:3000/favorites" className={s.menu__link}>Мой плейлист</a></li>
                {
                    loggedIn ?
                    <li className={s.menu__item}><button onClick={handleLogOut} className={s.menu__link}>Выйти</button></li>
                    :
                    <li className={s.menu__item}><a href="http://localhost:3000/" className={s.menu__link}>Войти</a></li>
                }
                <div onClick={handleThemeChanging}>
                    <img alt='Night Mode' src={theme === 'dark' ? luna : sun} />
                </div> 
            </ul>
        </div>
    )
}

export default NavMenu;