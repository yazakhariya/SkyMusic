import React from 'react';
import { ReactSVG } from "react-svg";
import sprite from '../../../img/icon/sprite.svg';
import s from './track-plaing.module.css';

function PlayingTrackElements() {

    return (
        <div className={s.track_play__contain}>
            <ReactSVG src={sprite} className={s.track_play__image} alt="music" />
            <div className={s.track_play__author}>
                <a className={s.track_play__author_link} href="http://">Ты та...</a>
            </div>
            <div className={s.track_play__album}>
                <a className={s.track_play__album_link} href="http://">Баста</a>
            </div>
        </div>
    )
}

export default PlayingTrackElements;