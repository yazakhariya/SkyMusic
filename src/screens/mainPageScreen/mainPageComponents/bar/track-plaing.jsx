import { ReactSVG } from "react-svg";
import sprite from '../../../img/icon/sprite.svg';
import s from './track-plaing.module.css';
import p from './player-controls-panel.module.css';
import PlayerControls from "../player-controls";
import prev from '../../../img/icon/prev.svg';
import play from '../../../img/icon/play.svg';
import next from '../../../img/icon/next.svg';
import repeat from '../../../img/icon/repeat.svg';
import shuffle from '../../../img/icon/shuffle.svg';
import pause from '../../../img/icon/pause-1010-svgrepo-com (1).svg';


function PlayingTrackElements({ audio, isPlaying, onPauseClick }) {

    const trackName = localStorage.getItem('track-name');
    const trackAuthor = localStorage.getItem('track-author');
    
    return (
        <div className={s.bar__player}>
            {audio}
            <div className={p.player__controls}>
                <PlayerControls className={p.player__btn_prev} src={prev} />
                {
                    isPlaying ? <PlayerControls onClick={() => onPauseClick(false)} className={`${p.player__btn_play} ${p._btn}`} src={pause}/> 
                    : <PlayerControls onClick={() => onPauseClick(true)} className={`${p.player__btn_pause} ${p._btn}`} src={play} />
                }
                <PlayerControls className={p.player__btn_next} src={next} />
                <PlayerControls className={`${p.player__btn_repeat} ${p._btn_icon}`} src={repeat} />
                <PlayerControls className={`${p.player__btn_shuffle} ${p._btn_icon}`} src={shuffle} /> 
            </div>
            <div className={s.player__track_play}>
                <div className={s.track_play__contain}>
                    <ReactSVG src={sprite} className={s.track_play__image} alt="music" />
                    <div className={s.track_play__author}>
                        <p className={s.track_play__author_link}>{trackName}</p>
                    </div>
                    <div className={s.track_play__album}>
                        <p className={s.track_play__album_link}>{trackAuthor}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayingTrackElements;