import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InputForm from './inputForm';
import s from './registrationForm.module.css';
import logo from './Group 48096389.png';
import Button from './buttonForm';
import { useRegisterUserMutation } from './AuthApi';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [usernameEmpty, setUsernameEmpty] = useState(false);
    const [usernameError, setUsernameError] = useState('Это поле не может быть пустым');

    const [email, setEmail] = useState('');
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [emailError, setEmailError] = useState('Это поле не может быть пустым');

    const [password, setPassword] = useState('');
    const [passwordEmpty, setPasswordEmpty] = useState(false);
    const [passwordError, setPasswordError] = useState('Это поле не может быть пустым');

    const [validForm, setValidForm] = useState(false);

    const blurHandler = (e) => {
        
        if(e.target.name === 'nameuser') {
            setUsernameEmpty(true);
        } 
        if(e.target.name === 'password') {
            setPasswordEmpty(true);
        }
        if(e.target.name === 'email') {
            setEmailEmpty(true);
        } 
    }

    const handleUserName = (e) => {
        if(e.target.value.length > 10) {
            setUsernameError('Введите меньше 10 символов')
        } else {
            setUsernameError('')
        }
        setUsername(e.target.value);
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
        if(usernameError || emailError || passwordError) {
            setValidForm(false);
        } else {
            setValidForm(true);
        }
    }, [usernameError, emailError, passwordError])

    const [errorMsg, setErrorMsg] = useState('');

    let navigate = useNavigate();
    const [registerUser, {data, error, isError}] = useRegisterUserMutation();

    useEffect(() => {
        if(data) {
            console.log(data);
            localStorage.setItem('userID', data.id);
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
            <p role="error" style={{ color: "red" }}>{errorMsg} / Reload the page </p> 
            : 
            <div className={s.registerBox}>
                <img alt='Логотип' className={s.logo} src={logo} />
                {(usernameEmpty && usernameError) && <div className={s.loginInputError}>{usernameError}</div>} 
                <InputForm name='nameuser'  onBlur={(e) => blurHandler(e)} className={s.loginInput} value={username} onChange={(e) => handleUserName(e)} placeholder='Логин' type='text' />
                {(emailEmpty && emailError) && <div className={s.emailInputError}>{emailError}</div>} 
                <InputForm name='email' onBlur={(e) => blurHandler(e)} className={s.emailInput} value={email} onChange={(e) => handleEmail(e)} placeholder='Почта' type='text' />
                {(passwordEmpty && passwordError) && <div className={s.repeatPassInputError}>{passwordError}</div>} 
                <InputForm name='password' onBlur={(e) => blurHandler(e)} className={s.repeatPassInput} value={password} onChange={(e) => handlePassword(e)} placeholder='Пароль' type='password' />
                <Button disabled={!validForm} className={s.registerButton} type='submit' onClick={handleSubmit} value='Зарегистрироваться' />
            </div>
            }   
        </div>
    )
}

export default RegistrationForm;