import s from './mainPageScreen.module.css';
import Bar from './mainPageComponents/bar/bar';
import MainPartOfThePage from './mainPageComponents/mainPart/mainPart';

const MainPageScreen = ({ loggedIn, theme, isLoading, data, isPlaying, setIsPlaying, controls, audio, state }) => {
  
  return (
      <div className={s.wrapper}>
        <div className={s.container}>
          <MainPartOfThePage setIsPlaying={setIsPlaying} isLoading={isLoading} data={data} theme={theme} loggedIn={loggedIn} />
          <Bar onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls}/>
          <footer className={s.footer}></footer>
        </div>
      </div>
  )
}

export default MainPageScreen;