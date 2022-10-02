import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({connect,setConnect}) => {

    let users = []
    const navigate = useNavigate()

    fetch(`${process.env.REACT_APP_SERVER_URL || 'http://localhost:3001'}/user`)
        .then((res) => res.json())
        .then((json) => {
            users = json
        });

    const [errMsg, setErrMsg] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();

        users.forEach((user) => {
            if (user.email === event.target.email.value && user.password === event.target.password.value) {
                localStorage.setItem("connectUser", true)
                setConnect(true)
                navigate('/')
            } else {
                setErrMsg("Data or password are incorrect!")
            }
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label htmlFor="userName">Mail:</label>
                <input type="email" name="email" className="formInput" required />

                <label htmlFor="password">Mot de passe:</label>
                <p className='errorMsg'>{errMsg}</p>
                <input type="password" name="password" className="formInput" required />

                <input type="submit" name="submit" value="Valider" className='formSubmit' />
            </form>
        </div>
    )
}
export default Login;