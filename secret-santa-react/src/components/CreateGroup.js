import React, { Component } from 'react';

const CreateGroup = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.userName.value);
    }

    return (
        <div>
            <h1>Create a new group</h1>
            <form className='createGroupForm' onSubmit={handleSubmit}>
                <label htmlFor="groupName">Nom du groupe :</label>
                <input type="text" name="groupName" className='formInput' required/>

                <input type="submit" name="submit" value="Valider" className='formSubmit'/>
            </form>
        </div>
    )
}
export default CreateGroup;