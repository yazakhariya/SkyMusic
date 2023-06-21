import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InputForm from './inputForm';
import s from './registrationForm.module.css';
import logo from './Group 48096389.png';
import Button from './buttonForm';
import { useRegisterUserMutation } from './AuthApi';

const RegistrationForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    let navigate = useNavigate();
    const [registerUser, {data, error, isError}] = useRegisterUserMutation();

    useEffect(() => {
        if(data) {
            console.log(data);
            localStorage.setItem('login', JSON.stringify({login: data.username, id: data.id}));
            localStorage.setItem('user', username);
            setUsername('');
            setPassword('');
            setEmail('');
            navigate('/');
        }

        if(isError) {
            setErrorMsg(error.message);
        }

    }, [data, isError]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser({username, email, password});
    }

    return (
        <div>
            {isError 
            ? 
            <p style={{ color: "red" }}>{errorMsg} / Reload the page </p> 
            : 
            <div className={s.registerBox}>
                <img alt='Логотип' className={s.logo} src={logo} />
                <InputForm className={s.loginInput} value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Логин' type='text' />
                <InputForm className={s.emailInput} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Почта' type='text' />
                <InputForm className={s.repeatPassInput} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Пароль' type='password' />
                <Button className={s.registerButton} type='submit' onClick={handleSubmit} value='Зарегистрироваться' />
            </div>
            }   
        </div>
    )
}

export default RegistrationForm;