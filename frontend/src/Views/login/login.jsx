import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Controllers/Redux/authSlice';
import './login.css';

function Login() {
    const dispatch = useDispatch();
    const [ formInput, setFormInput ] = useState({
        name: "",
        password: ""
    });

    function inputChange(e) {
        setFormInput({
            ...formInput,
            [ e.target.name ]: e.target.value
        });
    };

    function submit(e) {
        dispatch(signIn(formInput));
        e.preventDefault();
    }

    return (
        <div className="loginBG">
            <form className="login-panel">
                <h1>Login:</h1>
                <input name="name" placeholder="Name" onChange={inputChange} value={formInput.name} />
                <input name="password" type="password" placeholder="Password" onChange={inputChange} value={formInput.password} />
                <button type="submit" onClick={submit}>Login</button>
            </form>
        </div>
    )
}

export default Login;