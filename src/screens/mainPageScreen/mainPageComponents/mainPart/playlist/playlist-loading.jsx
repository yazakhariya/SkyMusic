import React from 'react';
import noteloading from '../../../../img/sceleton/Group 11.png';
import trackloading from '../../../../img/sceleton/Rectangle 11.png';
import authorloading from '../../../../img/sceleton/Rectangle 12 (1).png';
import albomloading from '../../../../img/sceleton/Rectangle 13 (1).png';


function PlaylistLoading(Component) {
    
    return function PlaylistLoading({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <img alt='Загрузка изображения' src={noteloading}></img>
                    <div className="track__title-text">
                    <img alt='Загрузка изображения' src={trackloading}></img>
                    </div>
                </div>
                <div className="track__author">
                    <img alt='Загрузка изображения' src={authorloading}></img>
                </div>
                <div className="track__album">
                    <img alt='Загрузка изображения' src={albomloading}></img>
                </div>
                <div className="track__time">
                </div>
            </div>
        </div>
        );
    };
}
export default PlaylistLoading;