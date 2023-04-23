import React from 'react';
import playlist1 from '../../../img/sceleton/Rectangle 17.png';
import playlist2 from '../../../img/sceleton/Rectangle 17.png';
import playlist3 from '../../../img/sceleton/Rectangle 17.png';
import s from './sideBar-loading.module.css';

const SideBarLoading = () => {

    return (
        <div className={s.main__sidebar}>
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

export default SideBarLoading;