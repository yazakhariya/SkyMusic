import React, { useState, useEffect } from 'react';
import PlayingTrackElements from './track-plaing';
import PlayingTrackLikeDis from './track-playing-like-dis';
import VolumeContent from './volume-content';
import PlayerControlsPanel from './player-controls-panel';
import BarLoading from './bar-loading';
import s from './bar.module.css';

function Bar() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
        setShow(true)
    }, 1000)

    return () => clearTimeout(timeout)

    }, [])

    return (
        <div className={s.bar}>
          <div className={s.bar__content}>
            <div className={s.bar__player_progress}></div>
              <div className={s.bar__player_block}>
                <div className={s.bar__player}>
                  <PlayerControlsPanel />
                  <div className={s.player__track_play}>
                    {(!show) ? <BarLoading /> : <PlayingTrackElements />}
                    <PlayingTrackLikeDis />
                  </div>
                </div>
                <div className={s.bar__volume_block}>
                  <VolumeContent />
                </div>
              </div>
          </div>
        </div>
    )
}

export default Bar;