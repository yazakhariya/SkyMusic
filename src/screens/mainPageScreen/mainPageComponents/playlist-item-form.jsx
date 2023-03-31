import React from 'react';
import { ReactSVG } from "react-svg";
import like from '../../img/icon/like.svg';
import note from '../../img/icon/note.svg';

function PlaylistItem(props) {
    const { text, author, album, time } = props;

    return (
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <ReactSVG src={note} className="track__title-image" alt="music" />
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">{text}<span className="track__title-span"></span></a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">{author}</a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">{album}</a>
                </div>
                <div className="track__time">
                    <ReactSVG src={like} className="track__time-svg" alt="time" />
                    <span className="track__time-text">{time}</span>
                </div>
            </div>
        </div>
    )
}

export default PlaylistItem;