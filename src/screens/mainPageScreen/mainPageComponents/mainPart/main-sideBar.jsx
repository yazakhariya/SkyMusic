import React, { useState, useEffect } from 'react';
import playlist1 from '../../../img/playlist01.png';
import playlist2 from '../../../img/playlist02.png';
import playlist3 from '../../../img/playlist03.png';
import SideBarLoading from './sideBar-loading';
import s from './sideBar-loading.module.css';

const SideBar = ({ userName }) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
        setShow(true)
    }, 1000)

    return () => clearTimeout(timeout)

    }, [show])

    if (!show) return <SideBarLoading />
    
    return (
        <div className={s.main__sidebar}>
            <div className={s.sidebar__personal}>
                <div className={s.sidebar__avatar}></div>
                <p className={s.sidebar__personal_name}>{userName}</p>  
            </div>
            <div className={s.sidebar__block}>
                <div className={s.sidebar__list}>
                    <div className={s.sidebar__item}>
                        <a className={s.sidebar__link} href="#">
                            <img className={s.sidebar__img} src={playlist1} alt="day's playlist"/>
                        </a>
                    </div>
                    <div className={s.sidebar__item}>
                        <a className={s.sidebar__link} href="#">
                            <img className={s.sidebar__img} src={playlist2} alt="day's playlist"/>
                        </a>
                    </div>
                    <div className={s.sidebar__item}>
                        <a className={s.sidebar__link} href="#">
                            <img className={s.sidebar__img} src={playlist3} alt="day's playlist"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default SideBar;