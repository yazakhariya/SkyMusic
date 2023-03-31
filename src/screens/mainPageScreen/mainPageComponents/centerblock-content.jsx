import React from 'react';
import watch from '../../img/icon/watch.svg';
import { ReactSVG } from "react-svg";

const CenterblockContent = () => {
    return (
        <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <ReactSVG src={watch} className="playlist-title__col col04" alt="time" />
        </div>
    )
}

export default CenterblockContent;