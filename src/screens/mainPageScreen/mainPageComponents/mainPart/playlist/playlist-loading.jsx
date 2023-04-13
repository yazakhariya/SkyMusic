import React from 'react';
import noteloading from '../../../../img/sceleton/Group 11.png';
import trackloading from '../../../../img/sceleton/Rectangle 11.png';
import authorloading from '../../../../img/sceleton/Rectangle 12 (1).png';
import albomloading from '../../../../img/sceleton/Rectangle 13 (1).png';
import s from './playlist-item-form.module.css';


function PlaylistLoading(Component) {
    
    return function PlaylistLoading({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <div className={s.playlist__item}>
            <div className={s.playlist__track}>
                <div className={s.track__title}>
                    <img alt='Загрузка изображения' src={noteloading}></img>
                    <div className={s.track__title_text}>
                    <img alt='Загрузка изображения' src={trackloading}></img>
                    </div>
                </div>
                <div className={s.track__author}>
                    <img alt='Загрузка изображения' src={authorloading}></img>
                </div>
                <div className={s.track__album}>
                    <img alt='Загрузка изображения' src={albomloading}></img>
                </div>
                <div className={s.track__time}>
                </div>
            </div>
        </div>
        );
    };
}
export default PlaylistLoading;