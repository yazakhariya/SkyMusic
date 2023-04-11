import React from 'react';
import playlist1 from '../../../img/sceleton/Rectangle 17.png';
import playlist2 from '../../../img/sceleton/Rectangle 17.png';
import playlist3 from '../../../img/sceleton/Rectangle 17.png';

const SideBarLoading = () => {

    return (
        <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
                <p className="sidebar__personal-name">Sergey.Ivanov</p>
                <div className="sidebar__avatar"></div>
            </div>
            <div className="sidebar__block">
                <div className="sidebar__list">
                    <div className="sidebar__item">
                        <a className="sidebar__link" href="#">
                            <img className="sidebar__img" src={playlist1} alt="day's playlist"/>
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a className="sidebar__link" href="#">
                            <img className="sidebar__img" src={playlist2} alt="day's playlist"/>
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a className="sidebar__link" href="#">
                            <img className="sidebar__img" src={playlist3} alt="day's playlist"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default SideBarLoading;