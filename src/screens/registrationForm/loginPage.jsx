import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLoginUserMutation, useGetTokenMutation } from './AuthApi';
import InputForm from './inputForm';
import Button from './buttonForm';
import s from './loginPage.module.css';
import logo from './Group 48096389.png';

const LoginPage = ({setLoggedIn}) => {
    let navigate = useNavigate();
    const [loginUser] = useLoginUserMutation();
    const [getToken, {data, isError, error}] = useGetTokenMutation();

    const [email, setEmail] = useState('');
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [emailError, setEmailError] = useState('Это поле не может быть пустым');

    const [password, setPassword] = useState('');
    const [passwordEmpty, setPasswordEmpty] = useState(false);
    const [passwordError, setPasswordError] = useState('Это поле не может быть пустым');

    const [errorMsg, setErrorMsg] = useState('');
    const [validForm, setValidForm] = useState(false);

    const blurHandler = (e) => {
        
        if(e.target.name === 'password') {
            setPasswordEmpty(true);
        }
        if(e.target.name === 'email') {
            setEmailEmpty(true);
        } 
    }

    const handleEmail = (e) => {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректно введена почта')
        } else {
            setEmailError('')
        }
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        if(e.target.value.length < 8 || e.target.value.length > 15) {
            setPasswordError('Некорректно введён пароль')
        } else {
            setPasswordError('')
        }
        setPassword(e.target.value);
    }

    useEffect(() => {
        if(emailError || passwordError) {
            setValidForm(false);
        } else {
            setValidForm(true);
        }
    }, [emailError, passwordError])

    useEffect(() => {
        if(data) {
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('token', data.access);
            localStorage.setItem('refreshToken', data.refresh);
            localStorage.setItem('email', email);
            localStorage.setItem('pwd', password);
            setLoggedIn(true);
            setEmail('');
            setPassword('');
            navigate('/main');
        }

        if(isError) {
            setErrorMsg(error.message);
        }

    }, [data, isError]);

    const handleLogIn = async (e) => {
        e.preventDefault();
        await loginUser({email, password});
        await getToken({email, password});
    }

    return (
        <div>
            {isError 
            ? 
            <p style={{ color: "red" }}>{errorMsg} / Reload the page </p> 
            : 
            <div className={s.registerBox}>
                <img alt='Логотип' className={s.logo} src={logo}/>
                {(emailEmpty && emailError) && <div className={s.loginInputError}>{emailError}</div>} 
                <InputForm name='email' onBlur={(e) => blurHandler(e)} className={s.loginInput} placeholder='Почта' type='text' value={email} onChange={(e) => handleEmail(e)} required /><br/>
                {(passwordEmpty && passwordError) && <div className={s.passInputError}>{passwordError}</div>} 
                <InputForm name='password' onBlur={(e) => blurHandler(e)} className={s.passInput} placeholder='Пароль' type='password' value={password} onChange={(e) => handlePassword(e)} required />
                <Button disabled={!validForm} className={s.loginButton} type='submit' onClick={handleLogIn} value='Войти' /><br/>
                <Button className={s.registerButton} type='submit' onClick={() => navigate('/register')} value='Зарегистрироваться' />
            </div>}
        </div>
    )
}

export default LoginPage;
