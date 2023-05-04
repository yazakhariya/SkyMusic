import React from 'react';
import img from '../../../img/sceleton/Group 11.png';
import name from '../../../img/sceleton/Rectangle 13.png';
import song from '../../../img/sceleton/Rectangle 12.png';
import s from './bar.module.css';
import PlayerControlsPanel from './player-controls-panel';


function BarLoading() {
    return (
        <div className={s.bar__player}>
            <PlayerControlsPanel />
            <div className={s.player__track_play}>
                <div className={s.track_play__contain}>
                    <img src={img} className={s.track_play__image} alt="music" />
                    <div>
                        <img src={name} alt="music" /><br/>
                        <img src={song} alt="music" />
                    </div>
                </div>
            </div>
        </div>
    );
    
}
export default BarLoading;