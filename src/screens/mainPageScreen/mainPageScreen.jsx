import s from './mainPageScreen.module.css';
import Bar from './mainPageComponents/bar/bar';
import MainPartOfThePage from './mainPageComponents/mainPart/mainPart';
import { useAudio } from 'react-use';
import { useGetAllTracksQuery } from '../registrationForm/AuthApi';
import { useEffect, useState } from 'react';

const MainPageScreen = ({ loggedIn, theme}) => {

  const { data = [], isLoading} = useGetAllTracksQuery();
  const [isPlaying, setIsPlaying] = useState(false);

  const [audio, state, controls] = useAudio({
      src: localStorage.getItem('track-file'),
      autoPlay: true,
  });

  useEffect(() => {
    if (isPlaying) {
      controls.play();
    } else {
      controls.pause();
    }
}, [isPlaying]);
  
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