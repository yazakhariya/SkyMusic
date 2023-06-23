import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './screens/registrationForm/loginPage';
import RegistrationForm  from './screens/registrationForm/registrationForm';
import MainPageScreen from './screens/mainPageScreen/mainPageScreen';
import { NotFound } from './screens/404/not-found-page';
import ThemeContext from './screens/mainPageScreen/mainPageComponents/theme-context';
import { useGetAllTracksQuery } from './screens/registrationForm/AuthApi';
import { useAudio } from 'react-use';
import FavoritesPage from './screens/mainPageScreen/mainPageComponents/favoritesPage';
import Thedayplaylist from './screens/mainPageScreen/mainPageComponents/mainPart/selections/thedayplaylist';
import Indie from './screens/mainPageScreen/mainPageComponents/mainPart/selections/indie';
import OneHundred from './screens/mainPageScreen/mainPageComponents/mainPart/selections/oneHundred';

function App() {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');
    const [theme, setTheme] = useState('dark');
    const {data = [], isLoading} = useGetAllTracksQuery();
    const [isPlaying, setIsPlaying] = useState(false);

    const [audio, state, controls] = useAudio({
        src: localStorage.getItem('track-file'),
        autoPlay: false,
    });

    useEffect(() => {
        if (isPlaying) {
          controls.play();
        } else {
          controls.pause();
        }
    }, [isPlaying]);

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            <Routes>
                <Route path='/' element={<LoginPage setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
                <Route path='/register' element={<RegistrationForm />} />
                <Route path='/favorites' element={<FavoritesPage onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls} setIsPlaying={setIsPlaying} data={data} theme={theme} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                <Route path='/main' element={<MainPageScreen audio={audio} state={state} controls={controls} isPlaying={isPlaying} setIsPlaying={setIsPlaying} isLoading={isLoading} data={data} theme={theme} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/collection/1/' element={<Thedayplaylist onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls} setIsPlaying={setIsPlaying} theme={theme} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                <Route path='/collection/2/' element={<OneHundred onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls} setIsPlaying={setIsPlaying} theme={theme} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                <Route path='/collection/3/' element={<Indie onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls} setIsPlaying={setIsPlaying} theme={theme} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            </Routes>
        </ThemeContext.Provider>
    )
}

export default App;
