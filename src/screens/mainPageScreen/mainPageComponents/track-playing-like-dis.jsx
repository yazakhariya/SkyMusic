import React from 'react';
import { ReactSVG } from "react-svg";
import like from '../../img/icon/like.svg';
import dislike from '../../img/icon/dislike.svg';

function PlayingTrackLikeDis() {
    return (
        <div className="track-play__like-dis">
            <ReactSVG src={like} className="track-play__like _btn-icon" alt="like" />
            <ReactSVG src={dislike} className="track-play__dislike _btn-icon" alt="dislike" />
        </div>
    )
}

export default PlayingTrackLikeDis;