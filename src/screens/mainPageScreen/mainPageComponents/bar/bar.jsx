import { useState, useEffect } from 'react';
import PlayingTrackElements from './track-plaing';
import PlayingTrackLikeDis from './track-playing-like-dis';
import VolumeContent from './volume-content';
import BarLoading from './bar-loading';
import s from './bar.module.css';
import InputForm from '../../../registrationForm/inputForm';

function Bar({ audio, onPauseClick, controls, isPlaying, nextTrack, prevTrack, getRandomSong, state }) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
        setShow(true)
    }, 1000)

    return () => clearTimeout(timeout)

    }, [])

    const progressBar = (e) => {
      const range = e.target;
      const rangeValue = Number(range.value) / 10;
      if(rangeValue === 0) {
        controls.seek(state.time + rangeValue);
      } else {
        controls.seek(state.time - rangeValue);
      }
  }

    return (
        <div className={s.bar}>
          <div className={s.bar__content}>
            <InputForm  name="range" step="0" min="0" max="100" className={s.bar__player_progress} onChange={progressBar} />
              <div className={s.bar__player_block}>
                {(!show) ? <BarLoading /> : <PlayingTrackElements controls={controls} getRandomSong={getRandomSong} nextTrack={nextTrack} prevTrack={prevTrack} onPauseClick={onPauseClick} isPlaying={isPlaying} audio={audio} />}
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