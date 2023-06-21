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
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

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
                <InputForm className={s.loginInput} placeholder='Почта' type='text' value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
                <InputForm className={s.passInput} placeholder='Пароль' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <Button className={s.loginButton} type='submit' onClick={handleLogIn} value='Войти' /><br/>
                <Button className={s.registerButton} type='submit' onClick={() => navigate('/register')} value='Зарегистрироваться' />
            </div>}
        </div>
    )
}

export default LoginPage;
