import React from 'react';

const Register = () => {

    let users = []

    fetch('http://localhost:3001/user')
    .then((res) => res.json())
    .then((json) => {
       users = json
       console.log(users)

    }) 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.email.value,)
        fetch(`http://localhost:3001/user/addNew`,{
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
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
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