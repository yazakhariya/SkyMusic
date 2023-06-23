import { ReactSVG } from "react-svg";
import note from '../../../../img/icon/note.svg';
import s from './playlist-item-form.module.css';
import LikeButton from "./likeButton";

function PlaylistItem({ tracks, search, setIsPlaying }) {

    const userID = Number(localStorage.getItem('userID'));

    if (!tracks || tracks.length === 0) return <p>Треки не найдены</p>;
    return (
        <div className={s.playlist__item}>      
            {tracks.filter((item) => {
                return search.toLowerCase() === ''
                ? item
                : item.name.toLowerCase().includes(search);
            }).map((track) => {
                return (
                    <div key={track.id} className={s.playlist__track}>
                        <div className={s.track__title}>
                            <ReactSVG src={note} className={s.track__title_image} alt="music" />
                            <div className={s.track__title_text}>
                                <button className={s.track__title_link} onClick={() => {
                                    localStorage.setItem('track-author', track.author);
                                    localStorage.setItem('track-name', track.name);
                                    localStorage.setItem('track-file', track.track_file);
                                    setIsPlaying(true)}}>{track.name}<span className={s.track__title_span}></span></button>
                            </div>
                        </div>
                        <div className={s.track__author}>
                            <a className={s.track__author_link} href="http://">{track.author}</a>
                        </div>
                        <div className={s.track__album}>
                            <a className={s.track__album_link} href="http://">{track.album}</a>
                        </div>
                        <LikeButton track={track} likedItem={track.stared_user.some(el => el.id === userID)} />
                        <div className={s.track__time} >

                            <span className={s.track__time_text}>{Math.floor(track.duration_in_seconds / 60) + ': ' + (track.duration_in_seconds % 60) }</span>

                        </div>
                    </div>
                )
                
            })} 
        
        </div> 
    )
    
}

export default PlaylistItem;