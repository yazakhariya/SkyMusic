import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from './inputForm';
import './registrationForm.css';
import logo from './Group 48096389.png';

const RegistrationForm = () => {
    const navigate = useNavigate();
   
    return (
        <div className='registerBox'>
            <img alt='Логотип' className='logo' src={logo}/>
            <InputForm className='loginInput' placeholder='Логин' type='text' />
            <InputForm className='passInput' placeholder='Пароль' type='password' />
            <InputForm className='repeatPassInput' placeholder='Повторите пароль' type='password' />
            <button className='registerButton' type='submit' onClick={() => navigate('/')}>Зарегистрироваться</button>
        </div>
    )
}

export default RegistrationForm;