import React from 'react';
import { ReactSVG } from "react-svg";
import sprite from '../../img/icon/sprite.svg';

function PlayingTrackElements() {

    return (
        <div className="track-play__contain">
            <ReactSVG src={sprite} className="track-play__image" alt="music" />
            <div className="track-play__author">
                <a className="track-play__author-link" href="http://">Ты та...</a>
            </div>
            <div className="track-play__album">
                <a className="track-play__album-link" href="http://">Баста</a>
            </div>
        </div>
    )
}

export default PlayingTrackElements;