import Bar from "../../bar/bar";
import s from '../../../mainPageScreen.module.css';
import OneHundredContent from "./OneHundredContent";
import { useGetCollection2Query } from "../../../../registrationForm/AuthApi";

export default function Indie({ isPlaying, audio, state, controls, setIsPlaying, theme, loggedIn }) {

    const {data = []} = useGetCollection2Query();
    const track = data.items;

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <OneHundredContent setIsPlaying={setIsPlaying} data={track} theme={theme} loggedIn={loggedIn} />
                <Bar onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls}/>
                <footer className={s.footer}></footer>
            </div>
      </div>
    )
}