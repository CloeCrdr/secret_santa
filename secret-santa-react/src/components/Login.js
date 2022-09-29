import React, { Component } from 'react';

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.userName.value);
    }

    return (
        <div>
            <h1>Login</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label htmlFor="userName">Nom utilisateur:</label>
                <input type="text" name="userName" className="formInput" required/>

                <label htmlFor="password">Mot de passe:</label>
                <input type="password" name="password" className="formInput" required/>

                <input type="submit" name="submit" value="Valider" className='formSubmit'/>
            </form>
        </div>
    )
}


export default Login;