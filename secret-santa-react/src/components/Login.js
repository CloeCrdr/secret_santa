import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Login extends React.Component{

    connectUser;
    // navigate = useNavigate();

    constructor(props) {
        super(props);
      
        this.state = {
            users: [],
            DataisLoaded: false
        };
      }

      componentDidMount (){
        fetch('http://localhost:3001/user')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                users: json,
                DataisLoaded: true
            });
            console.log(this.state.users);
        }); 
    }

    render(){
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(this.state.users);

            console.log(event.target.email.value);
            console.log(event.target.password.value);
            this.state.users.forEach((user) => {
                if(user.email === event.target.email.value && user.password === event.target.password.value){
                    this.connectUser = user
                    useNavigate('/')
                }
            })
            this.props.parentCallback(this.connectUser);
            console.log(this.connectUser)
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
}
export default Login;