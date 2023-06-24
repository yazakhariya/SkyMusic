import s from './mainPageScreen.module.css';
import Bar from './mainPageComponents/bar/bar';
import MainPartOfThePage from './mainPageComponents/mainPart/mainPart';

const MainPageScreen = ({ navActive, setNavActive, active, setActive, getRandomSong, loggedIn, theme, isLoading, data, isPlaying, setIsPlaying, controls, audio, state, nextTrack, prevTrack }) => {
  
  return (
      <div className={s.wrapper}>
        <div className={s.container}>
          {!active ?
            <MainPartOfThePage navActive={navActive} setNavActive={setNavActive} setActive={setActive} setIsPlaying={setIsPlaying} isLoading={isLoading} data={data} theme={theme} loggedIn={loggedIn} />
            : 
            <div>
               <MainPartOfThePage setNavActive={setNavActive} navActive={navActive} setIsPlaying={setIsPlaying} isLoading={isLoading} data={data} theme={theme} loggedIn={loggedIn} />
                <Bar getRandomSong={getRandomSong} nextTrack={nextTrack} prevTrack={prevTrack} onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls}/>
            </div>
          }
          <footer className={s.footer}></footer>
        </div>
      </div>
  )
}

export default MainPageScreen;