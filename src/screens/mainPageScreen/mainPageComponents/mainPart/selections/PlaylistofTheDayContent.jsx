import { ReactSVG } from "react-svg";
import CenterBlockSearch from "../center-block-search";
import CenterblockContent from "../centerblock-content";
import NavigationMenu from "../main-navigation";
import LikeButton from "../playlist/likeButton";
import s from '../mainPart.module.css';
import t from '../playlist/playlist-item-form.module.css';
import note from '../../../../img/icon/note.svg';

function PlaylistofTheDayContent({loggedIn, theme, data, setIsPlaying, setNavActive, navActive}) {

    const userID = Number(localStorage.getItem('userID'));
    if (!data || data.length === 0) return <p>Треки не найдены</p>;

    return (
        <main className={s.main}>
            <NavigationMenu navActive={navActive} setNavActive={setNavActive} theme={theme} loggedIn={loggedIn} />
            <div className={s.main__centerblock}>
                <CenterBlockSearch theme={theme} />
                <div>
            <h2 className={s.centerblock__h2}>Плейлист дня</h2>
                <div className={s.centerblock__content}>
                    <CenterblockContent />
                    <div className={s.content__playlist}>
                    {data.map((item) => {
                            return (
                                <div key={item.id} className={t.playlist__track}>
                                    <div className={t.track__title}>
                                        <ReactSVG src={note} className={t.track__title_image} alt="music" />
                                        <div className={t.track__title_text}>
                                            <button className={t.track__title_link} onClick={() => {
                                                localStorage.setItem('track-author', item.author);
                                                localStorage.setItem('track-name', item.name);
                                                localStorage.setItem('track-file', item.track_file);
                                                setIsPlaying(true)}}>{item.name}<span className={t.track__title_span}></span></button>
                                        </div>
                                    </div>
                                    <div className={t.track__author}>
                                        <a className={t.track__author_link} href="http://">{item.author}</a>
                                    </div>
                                    <div className={t.track__album}>
                                        <a className={t.track__album_link} href="http://">{item.album}</a>
                                    </div>
                                    <LikeButton track={item} likedItem={item.stared_user.some(el => el.id === userID)} />
                                    <div className={t.track__time} > 
                                        <span className={s.track__time_text}>{Math.floor(item.duration_in_seconds / 60) + ': ' + (item.duration_in_seconds % 60) }</span>
                                    </div>
                                </div>
                            )    
                        })} 
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default PlaylistofTheDayContent;
