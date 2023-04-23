import React from 'react';
import { ReactSVG } from "react-svg";
import like from '../../../img/icon/like.svg';
import dislike from '../../../img/icon/dislike.svg';
import s from './track-playing-like-dis.module.css';

function PlayingTrackLikeDis() {
    return (
        <div className={s.track_play__like_dis}>
            <ReactSVG src={like} className={`${s.track_play__like} ${s._btn_icon}`} alt="like" />
            <ReactSVG src={dislike} className={`${s.track_play__dislike} ${s._btn_icon}`} alt="dislike" />
        </div>
    )
}

export default PlayingTrackLikeDis;