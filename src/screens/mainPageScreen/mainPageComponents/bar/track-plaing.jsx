import { useState, useRef, useEffect } from 'react';
import { ReactSVG } from "react-svg";
import sprite from '../../../img/icon/sprite.svg';
import s from './track-plaing.module.css';
import PlayerControlsPanel from './player-controls-panel';


function PlayingTrackElements({ tracks }) {
    const [trackIndex, setTrackIndex] = useState(0);
    const { title, artist, audioSrc } = tracks[trackIndex];
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(new Audio(audioSrc));
    const isReady = useRef(false);
    const intervalRef = useRef();
    

    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
    }, [isPlaying]);
    
    return (
        <div className={s.bar__player}>
            <PlayerControlsPanel
            isPlaying={isPlaying} 
            onPauseClick={setIsPlaying}
            />
            <div className={s.player__track_play}>
                <div className={s.track_play__contain}>
                    <ReactSVG src={sprite} className={s.track_play__image} alt="music" />
                    <div className={s.track_play__author}>
                        <p className={s.track_play__author_link}>{title}</p>
                    </div>
                    <div className={s.track_play__album}>
                        <p className={s.track_play__album_link}>{artist}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayingTrackElements;