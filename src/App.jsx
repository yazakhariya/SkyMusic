import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './screens/registrationForm/loginPage';
import RegistrationForm  from './screens/registrationForm/registrationForm';
import MainPageScreen from './screens/mainPageScreen/mainPageScreen';
import { NotFound } from './screens/404/not-found-page';

function App() {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');

    const [ userName, setUserName ] = useState(localStorage.getItem('userName'));

    return (
        <Routes>
            <Route path='/' element={<LoginPage setLoggedIn={setLoggedIn} setUserName={setUserName} />} />
            <Route path='/register' element={<RegistrationForm />} />
            <Route path='/main' element={<MainPageScreen loggedIn={loggedIn} userName={userName} setUserName={setUserName} setLoggedIn={setLoggedIn} />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App;
