import React from 'react';
import PlayerControls from './player-controls';
import prev from '../../img/icon/prev.svg';
import play from '../../img/icon/play.svg';
import next from '../../img/icon/next.svg';
import repeat from '../../img/icon/repeat.svg';
import shuffle from '../../img/icon/shuffle.svg';

function PlayerControlsPanel() {
    return (
        <div className="player__controls">
            <PlayerControls className="player__btn-prev " src={prev} />
            <PlayerControls className="player__btn-play _btn" src={play} />
            <PlayerControls className="player__btn-next" src={next} />
            <PlayerControls className="player__btn-repeat _btn-icon" src={repeat} />
            <PlayerControls className="player__btn-shuffle _btn-icon" src={shuffle} />
        </div>
    )
}

export default PlayerControlsPanel;
