import { useState, useEffect } from 'react';
import PlayingTrackElements from './track-plaing';
import PlayingTrackLikeDis from './track-playing-like-dis';
import VolumeContent from './volume-content';
import BarLoading from './bar-loading';
import s from './bar.module.css';

function Bar({audio, onPauseClick, controls, isPlaying}) {
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
                {(!show) ? <BarLoading /> : <PlayingTrackElements onPauseClick={onPauseClick} isPlaying={isPlaying} audio={audio} />}
                <PlayingTrackLikeDis />
                <div className={s.bar__volume_block}>
                  <VolumeContent controls={controls} />
                </div>
              </div>
          </div>
        </div>
    )
}

export default Bar;