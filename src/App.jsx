import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './screens/registrationForm/loginPage';
import RegistrationForm  from './screens/registrationForm/registrationForm';
import MainPageScreen from './screens/mainPageScreen/mainPageScreen';
import { NotFound } from './screens/404/not-found-page';
import Favorites from './screens/mainPageScreen/mainPageComponents/favorites';
import ThemeContext from './screens/mainPageScreen/mainPageComponents/theme-context';

function App() {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');
    const [theme, setTheme] = useState('dark');

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            <Routes>
                <Route path='/' element={<LoginPage setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
                <Route path='/register' element={<RegistrationForm />} />
                <Route path='/favorites' element={<Favorites theme={theme} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                <Route path='/main' element={<MainPageScreen theme={theme} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </ThemeContext.Provider>
    )
}

export default App;
