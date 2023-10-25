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
    const [active, setActive] = useState(false);

    const [navActive, setNavActive] = useState(false);

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

    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(data[trackIndex]);

    function setTrack() {
        localStorage.setItem('track-author', currentTrack.author);
        localStorage.setItem('track-name', currentTrack.name);
        localStorage.setItem('track-file', currentTrack.track_file);
        localStorage.getItem('track-file');
        setIsPlaying(true);
        controls.play();
    }

    const handleNext = () => {
        if (trackIndex >= data.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(data[0]);
            setTrack();
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(data[trackIndex + 1]);
            setTrack();  
        }
    };
    const handlePrevious = () => {
        if (trackIndex === 0) {
            const lastTrackIndex = data.length - 1;
            setTrackIndex(lastTrackIndex);
            setCurrentTrack(data[lastTrackIndex]);
            setTrack();
        } else {
            setTrackIndex((prev) => prev - 1);
            setCurrentTrack(data[trackIndex - 1]);
            setTrack();
          }
    };

    let current = data.length;
    
    const getRandomSong = () => {
        const randomSong = data[Math.floor(Math.random() * current)];
        current++;
        localStorage.setItem('track-author', randomSong.author);
        localStorage.setItem('track-name', randomSong.name);
        localStorage.setItem('track-file', randomSong.track_file);
        localStorage.getItem('track-file');
        setIsPlaying(true);
        controls.play();
    }

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            <Routes>
                <Route path='/' element={<LoginPage setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
                <Route path='/register' element={<RegistrationForm />} />
                <Route path='/favorites' element={<FavoritesPage navActive={navActive} setNavActive={setNavActive} getRandomSong={getRandomSong} nextTrack={handleNext} prevTrack={handlePrevious} onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls} setIsPlaying={setIsPlaying} data={data} theme={theme} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                <Route path='/main' element={<MainPageScreen navActive={navActive} setNavActive={setNavActive} active={active} setActive={setActive} getRandomSong={getRandomSong} nextTrack={handleNext} prevTrack={handlePrevious} audio={audio} state={state} controls={controls} isPlaying={isPlaying} setIsPlaying={setIsPlaying} isLoading={isLoading} data={data} theme={theme} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/collection/1/' element={<Thedayplaylist navActive={navActive} setNavActive={setNavActive} getRandomSong={getRandomSong} nextTrack={handleNext} prevTrack={handlePrevious} onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls} setIsPlaying={setIsPlaying} theme={theme} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                <Route path='/collection/2/' element={<OneHundred navActive={navActive} setNavActive={setNavActive} getRandomSong={getRandomSong} nextTrack={handleNext} prevTrack={handlePrevious} onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls} setIsPlaying={setIsPlaying} theme={theme} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                <Route path='/collection/3/' element={<Indie navActive={navActive} setNavActive={setNavActive} getRandomSong={getRandomSong} nextTrack={handleNext} prevTrack={handlePrevious} onPauseClick={setIsPlaying} isPlaying={isPlaying} audio={audio} state={state} controls={controls} setIsPlaying={setIsPlaying} theme={theme} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            </Routes>
        </ThemeContext.Provider>
    )
}

export default App;
