import Bar from "../../bar/bar";
import s from '../../../mainPageScreen.module.css';
import IndieContent from "./IndieContent";
import { useGetCollection3Query } from "../../../../registrationForm/AuthApi";

export default function Indie({ getRandomSong, navActive, setNavActive, isPlaying, audio, state, controls, setIsPlaying, theme, loggedIn, nextTrack, prevTrack }) {

    const {data = []} = useGetCollection3Query();
    const track = data.items;

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <IndieContent navActive={navActive} setNavActive={setNavActive} setIsPlaying={setIsPlaying} data={track} theme={theme} loggedIn={loggedIn} />
                <Bar getRandomSong={getRandomSong} nextTrack={nextTrack} prevTrack={prevTrack} onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls}/>
                <footer className={s.footer}></footer>
            </div>
      </div>
    )
}
