import Bar from "../../bar/bar";
import s from '../../../mainPageScreen.module.css';
import IndieContent from "./IndieContent";
import { useGetCollection3Query } from "../../../../registrationForm/AuthApi";

export default function Indie({ isPlaying, audio, state, controls, setIsPlaying, theme, loggedIn }) {

    const {data = []} = useGetCollection3Query();
    const track = data.items;

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <IndieContent setIsPlaying={setIsPlaying} data={track} theme={theme} loggedIn={loggedIn} />
                <Bar onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls}/>
                <footer className={s.footer}></footer>
            </div>
      </div>
    )
}
