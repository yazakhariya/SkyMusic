import MainPartOfThePage from './favorites';
import Bar from './bar/bar';
import s from '../mainPageScreen.module.css';

function FavoritesPage({ setNavActive, navActive, isPlaying, audio, state, controls, setIsPlaying, data, theme, loggedIn, nextTrack, prevTrack }) {

    return (
        <div className={s.wrapper} >
            <div className={s.container}>
                <MainPartOfThePage navActive={navActive} setNavActive={setNavActive} setIsPlaying={setIsPlaying} data={data} theme={theme} loggedIn={loggedIn} />
                <Bar data={data} nextTrack={nextTrack} prevTrack={prevTrack} onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls}/>
                <footer className={s.footer}></footer>
            </div>
      </div>
    )
}

export default FavoritesPage;