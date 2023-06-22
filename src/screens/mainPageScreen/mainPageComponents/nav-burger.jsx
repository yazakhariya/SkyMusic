import { useGetRefreshTokenMutation } from '../../registrationForm/AuthApi';
import s from './nav-burger.module.css';

function NavBurger({ onClick }) {
    
    const [getRefreshToken] = useGetRefreshTokenMutation();
    const data = localStorage.getItem('refreshToken');

    // setInterval(function() {
    //     getRefreshToken(data);
    // }, 10000);

    return (
        <div onClick={onClick} className={s.nav__burger}>
            <span className={s.burger__line}></span>
            <span className={s.burger__line}></span>
            <span className={s.burger__line}></span>
        </div>    
    )
}

export default NavBurger;