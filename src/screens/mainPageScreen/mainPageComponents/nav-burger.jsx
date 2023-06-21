import s from './nav-burger.module.css';

function NavBurger({ onClick }) {
    
    return (
        <div onClick={onClick} className={s.nav__burger}>
            <span className={s.burger__line}></span>
            <span className={s.burger__line}></span>
            <span className={s.burger__line}></span>
        </div>    
    )
}

export default NavBurger;