import React, { useState, useEffect } from 'react';
import PlayingTrackElements from './track-plaing';
import PlayingTrackLikeDis from './track-playing-like-dis';
import VolumeContent from './volume-content';
import PlayerControlsPanel from './player-controls-panel';
import BarLoading from './bar-loading';

function Bar() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
        setShow(true)
    }, 1000)

    return () => clearTimeout(timeout)

    }, [show])

    return (
        <div className="bar">
          <div className="bar__content">
            <div className="bar__player-progress"></div>
              <div className="bar__player-block">
                <div className="bar__player player">
                  <PlayerControlsPanel />
                  <div className="player__track-play track-play">
                    {(!show) ? <BarLoading /> : <PlayingTrackElements />}
                    <PlayingTrackLikeDis />
                  </div>
                </div>
                <div className="bar__volume-block volume">
                  <VolumeContent />
                </div>
              </div>
          </div>
        </div>
    )
}

export default Bar;