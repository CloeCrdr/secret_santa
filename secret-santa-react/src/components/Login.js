import React, { Component } from 'react';
import Session from 'react-session-api';
import {useNavigate} from 'react-router-dom';

let users = []
let connectUser;

fetch('http://localhost:3001/user')
.then((res) => res.json())
.then((json) => {
    users = json
}); 


const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(users);

        console.log(event.target.email.value);
        console.log(event.target.password.value);
        users.forEach((user) => {
            if(user.email === event.target.email.value && user.password === event.target.password.value){
                connectUser = user
                Session.set("connectUser", connectUser)
                localStorage.setItem('test','je passe ')
                sessionStorage.setItem('testSession','je passe ')
                navigate('/')
            }
        })
        console.log(connectUser)
    }

    return (
        <div>
            <h1>Login</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label htmlFor="userName">Mail:</label>
                <input type="email" name="email" className="formInput" required/>

                <label htmlFor="password">Mot de passe:</label>
                <input type="password" name="password" className="formInput" required/>

                <input type="submit" name="submit" value="Valider" className='formSubmit'/>
            </form>
        </div>
    )
}
export default Login;