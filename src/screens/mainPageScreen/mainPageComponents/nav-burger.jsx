import { useGetRefreshTokenMutation } from '../../registrationForm/AuthApi';
import s from './nav-burger.module.css';
import { useEffect } from 'react';

function NavBurger({ onClick }) {
    
    const [getRefreshToken, {data}] = useGetRefreshTokenMutation();
    const refresh = localStorage.getItem('refreshToken');
    
    useEffect(() => {
        const interval = setInterval(function() {
            getRefreshToken(refresh);
        }, 8000);

        return () => clearInterval(interval);

    }, [getRefreshToken, refresh])

    if (data) {
        localStorage.setItem('token', data.access);
    }

    return (
        <div onClick={onClick} className={s.nav__burger}>
            <span className={s.burger__line}></span>
            <span className={s.burger__line}></span>
            <span className={s.burger__line}></span>
        </div>    
    )
}

export default NavBurger;