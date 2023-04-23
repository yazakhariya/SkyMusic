import React from 'react';
import watch from '../../../img/icon/watch.svg';
import { ReactSVG } from "react-svg";
import s from './centerblock-content.module.css';

const CenterblockContent = () => {
    return (
        <div className={s.content__title}>
            <div className={`${s.playlist_title__col} ${s.col01}`}>Трек</div>
            <div className={`${s.playlist_title__col} ${s.col02}`}>ИСПОЛНИТЕЛЬ</div>
            <div className={`${s.playlist_title__col} ${s.col03}`}>АЛЬБОМ</div>
            <ReactSVG src={watch} className={`${s.playlist_title__col} ${s.col04}`} alt="time" />
        </div>
    )
}

export default CenterblockContent;