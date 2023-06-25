import s from './mainPart/mainPart.module.css';
import t from './mainPart/playlist/playlist-item-form.module.css';
import { ReactSVG } from "react-svg";
import note from '../../img/icon/note.svg';
import CenterblockContent from './mainPart/centerblock-content';
import NavigationMenu from './mainPart/main-navigation';
import CenterBlockSearch from './mainPart/center-block-search';
import DisLike from './disLike';

function MainPartOfThePage({ loggedIn, theme, data, setIsPlaying, setNavActive, navActive }) {
    
    const userID = Number(localStorage.getItem('userID'));

    return (
        <main className={s.main}>
            <NavigationMenu navActive={navActive} setNavActive={setNavActive} theme={theme} loggedIn={loggedIn} />
            <div className={s.main__centerblock}>
                <CenterBlockSearch theme={theme} />
                <div>
            <h2 className={s.centerblock__h2}>Мои треки</h2>
                <div className={s.centerblock__content}>
                    <CenterblockContent />
                    <div className={s.content__playlist}>
                    {data.filter((track) => (track.stared_user.some(el => el.id === userID))).map((track) => {
                            return (
                                <div key={track.id} className={t.playlist__track}>
                                    <div className={t.track__title}>
                                        <ReactSVG src={note} className={t.track__title_image} alt="music" />
                                        <div className={t.track__title_text}>
                                            <button className={t.track__title_link} onClick={() => {
                                                localStorage.setItem('track-author', track.author);
                                                localStorage.setItem('track-name', track.name);
                                                localStorage.setItem('track-file', track.track_file);
                                                setIsPlaying(true)}}>{track.name}<span className={t.track__title_span}></span></button>
                                        </div>
                                    </div>
                                    <div className={t.track__author}>
                                        <a className={t.track__author_link} href="http://">{track.author}</a>
                                    </div>
                                    <div className={t.track__album}>
                                        <a className={t.track__album_link} href="http://">{track.album}</a>
                                    </div>
                                    <DisLike track={track} likedItem={track.stared_user.some(el => el.id === userID)} />
                                    <div className={t.track__time} > 
                                        <span className={s.track__time_text}>{Math.floor(track.duration_in_seconds / 60) + ': ' + (track.duration_in_seconds % 60) }</span>
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

export default MainPartOfThePage;