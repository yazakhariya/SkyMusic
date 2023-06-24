import Bar from "../../bar/bar";
import s from '../../../mainPageScreen.module.css';
import PlaylistofTheDayContent from "./PlaylistofTheDayContent";
import { useGetCollection1Query } from "../../../../registrationForm/AuthApi";

export default function Thedayplaylist({ isPlaying, audio, state, controls, setIsPlaying, theme, loggedIn, nextTrack, prevTrack, getRandomSong }) {

    const {data = []} = useGetCollection1Query();
    const track = data.items;

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <PlaylistofTheDayContent setIsPlaying={setIsPlaying} data={track} theme={theme} loggedIn={loggedIn} />
                <Bar getRandomSong={getRandomSong} nextTrack={nextTrack} prevTrack={prevTrack} onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls}/>
                <footer className={s.footer}></footer>
            </div>
      </div>
    )
}
