import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from './inputForm';
import s from './registrationForm.module.css';
import logo from './Group 48096389.png';
import Button from './buttonForm';

const RegistrationForm = () => {
    const navigate = useNavigate();
   
    return (
        <div className={s.registerBox}>
            <img alt='Логотип' className={s.logo} src={logo} />
            <InputForm className={s.loginInput} placeholder='Логин' type='text' />
            <InputForm className={s.passInput} placeholder='Пароль' type='password' />
            <InputForm className={s.repeatPassInput} placeholder='Повторите пароль' type='password' />
            <Button className={s.registerButton} type='submit' onClick={() => navigate('/')} value='Зарегистрироваться' />
        </div>
    )
}

export default RegistrationForm;