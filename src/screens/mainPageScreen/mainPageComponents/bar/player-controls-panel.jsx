import React from 'react';
import PlayerControls from '../player-controls';
import prev from '../../../img/icon/prev.svg';
import play from '../../../img/icon/play.svg';
import next from '../../../img/icon/next.svg';
import repeat from '../../../img/icon/repeat.svg';
import shuffle from '../../../img/icon/shuffle.svg';
import s from './player-controls-panel.module.css';

function PlayerControlsPanel() {
    return (
        <div className={s.player__controls}>
            <PlayerControls className={s.player__btn_prev} src={prev} />
            <PlayerControls className={`${s.player__btn_play} ${s._btn}`} src={play} />
            <PlayerControls className={s.player__btn_next} src={next} />
            <PlayerControls className={`${s.player__btn_repeat} ${s._btn_icon}`} src={repeat} />
            <PlayerControls className={`${s.player__btn_shuffle} ${s._btn_icon}`} src={shuffle} />
        </div>
    )
}

export default PlayerControlsPanel;
