import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './screens/registrationForm/loginPage';
import RegistrationForm  from './screens/registrationForm/registrationForm';
import MainPageScreen from './screens/mainPageScreen/mainPageScreen';

function App() {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegistrationForm />} />
            <Route path='/main' element={<MainPageScreen />} />
        </Routes>
    )
}

export default App;
