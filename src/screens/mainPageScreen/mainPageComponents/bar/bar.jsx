import React, { useState, useEffect } from 'react';
import PlayingTrackElements from './track-plaing';
import PlayingTrackLikeDis from './track-playing-like-dis';
import VolumeContent from './volume-content';
import BarLoading from './bar-loading';
import s from './bar.module.css';
import tracks from './tracks';

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
                {(!show) ? <BarLoading /> : <PlayingTrackElements  tracks={tracks} />}
                <PlayingTrackLikeDis />
                <div className={s.bar__volume_block}>
                  <VolumeContent tracks={tracks} />
                </div>
              </div>
          </div>
        </div>
    )
}

export default Bar;