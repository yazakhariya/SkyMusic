import React from 'react';
import { ReactSVG } from "react-svg";
import like from '../../../../img/icon/like.svg';
import note from '../../../../img/icon/note.svg';
import s from './playlist-item-form.module.css';

function PlaylistItem(props) {
    const { tracks } = props;
    if (!tracks || tracks.length === 0) return <p>Треки не найдены</p>;
    return (
        <div className={s.playlist__item}>       
            {tracks.map((track) => {
                return (
                    <div key={track.id} className={s.playlist__track}>
                        <div className={s.track__title}>
                            <ReactSVG src={note} className={s.track__title_image} alt="music" />
                            <div className={s.track__title_text}>
                                <a className={s.track__title_link} href="http://">{track.name}<span className={s.track__title_span}></span></a>
                            </div>
                        </div>
                        <div className={s.track__author}>
                            <a className={s.track__author_link} href="http://">{track.author}</a>
                        </div>
                        <div className={s.track__album}>
                            <a className={s.track__album_link} href="http://">{track.album}</a>
                        </div>
                        <div className={s.track__time}>
                            <ReactSVG src={like} className={s.track__time_svg} alt="time" />
                            <span className={s.track__time_text}>{track.duration_in_seconds}</span>
                        </div>
                    </div>
                )
                
            })} 
        
        </div> 
    )
    
}

export default PlaylistItem;