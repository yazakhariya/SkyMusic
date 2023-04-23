import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputForm from './inputForm';
import Button from './buttonForm';
import s from './loginPage.module.css';
import logo from './Group 48096389.png';

function LoginPage({ setLoggedIn, setUserName }) {

    const navigate = useNavigate();
    const [ userLogin, setUserLogin ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');

    function handleLogIn(e) {
        e.preventDefault();

        localStorage.setItem('loggedIn', true);
        localStorage.setItem('userName', userLogin);
        localStorage.setItem('userPassword', userPassword);
        
        setUserName(userLogin);
        setLoggedIn(true);
        navigate('/main');
    }

    function handleLogin(e) {
        setUserLogin(e.target.value);
    }

    function handlePassword(e) {
        setUserPassword(e.target.value);
        
    }

    return (
        <div className={s.registerBox}>
            <img alt='Логотип' className={s.logo} src={logo}/>
            <InputForm className={s.loginInput} placeholder='Логин' type='text' onChange={handleLogin} required /><br/>
            <InputForm className={s.passInput} placeholder='Пароль' type='password' onChange={handlePassword} required />
            <Button className={s.loginButton} type='submit' onClick={handleLogIn} value='Войти' /><br/>
            <Button className={s.registerButton} type='submit' onClick={() => navigate('/register')} value='Зарегистрироваться' />
        </div>
    )
}

export default LoginPage;
