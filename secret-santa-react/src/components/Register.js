import React from 'react';
import {useNavigate} from 'react-router-dom';

const Register = () => {

    fetch(`${process.env.REACT_APP_SERVER_URL || 'http://localhost:3001'}/user`)
    .then((res) => res.json())
    .then((json) => {
        users = json
        // console.log(users)
    }) 

    let users = []
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.email.value)
        let count = 0;
        users.forEach( element => {
            if(element.email === event.target.email.value){
                count ++
            }
        })
        if(count === 0){
            fetch(`${process.env.REACT_APP_SERVER_URL || 'http://localhost:3001'}/user/addNew`,{
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: event.target.email.value,
                    nom: event.target.nom.value,
                    prenom: event.target.prenom.value,
                    password: event.target.password.value
                })
            })
            .then(res => users.some( (element) => element  === event.target.email)? null:res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
            event.target.email.value = ""
            event.target.nom.value = ""
            event.target.password.value = ""
            event.target.prenom.value = ""
            navigate('/login')
        }else{
            alert('This user email already exist!');
        }
    } 

    return (
        <div>
            <h1>Register</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label htmlFor="nom">Nom:</label>
                <input type="text" name="nom" className='formInput' required />

                <label htmlFor="prenom">Prenom:</label>
                <input type="text" name="prenom" className='formInput' required />

                <label htmlFor="email">Mail:</label>
                <input type="email" name="email" className='formInput' required />

                <label htmlFor="password">Mot de passe:</label>
                <input type="password" name="password" className='formInput' required />

                <input type="submit" name="submit" value="Valider" className='formSubmit' />
            </form>
        </div>
    )
}
export default Register;