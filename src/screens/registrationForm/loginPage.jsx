import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from './inputForm';
import Button from './buttonForm';
import s from './loginPage.module.css';
import logo from './Group 48096389.png';

function handleClick(e) {
    e.preventDefault();
    console.log('Была нажата кнопка.');
  }
  

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className={s.registerBox}>
            <img alt='Логотип' className={s.logo} src={logo}/>
            <InputForm className={s.loginInput} placeholder='Логин' type='text' /><br/>
            <InputForm className={s.passInput} placeholder='Пароль' type='password' />
            <Button className={s.loginButton} type='submit' onClick={handleClick} value='Войти' /><br/>
            <Button className={s.registerButton} type='submit' onClick={() => navigate('/register')} value='Зарегистрироваться' />
        </div>
    )
}

export default LoginPage;
