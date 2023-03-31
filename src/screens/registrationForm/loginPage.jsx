import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from './inputForm';
import Button from './buttonForm';
import './loginPage.css';
import logo from './Group 48096389.png';

function handleClick(e) {
    e.preventDefault();
    console.log('Была нажата кнопка.');
  }
  

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className='registerBox'>
            <img alt='Логотип' className='logo' src={logo}/>
            <InputForm className='loginInput' placeholder='Логин' type='text' /><br/>
            <InputForm className='passInput' placeholder='Пароль' type='password' />
            <Button className='loginButton' type='submit' onClick={handleClick} value='Войти' /><br/>
            <Button className='registerButton' type='submit' onClick={() => navigate('/register')} value='Зарегистрироваться' />
        </div>
    )
}

export default LoginPage;
