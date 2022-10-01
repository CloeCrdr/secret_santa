import React, { useState, useEffect } from 'react';

const Groupe = ()=> {

    let groupeId;
    let groupeName;
    const [users,setUsers] = useState([])
    // const [dataIsLoaded,setDataIsLoaded] = useState(false)

    useEffect(() => {
        groupeId = window.location.href.split("/").pop();
        fetch(`http://localhost:3001/group/${groupeId}`)
        .then((res) => res.json())
        .then((json) => {
            setUsers(json)
            groupeName = user[0]?.groupe
        })
    });

    const user = users.map((user) => 
        <div key={user.id}>
            <div className='user'>
                <strong>{user.prenom + ' ' + user.nom}</strong>
                <span>{user.email}</span>
            </div> 
        </div>
    );

    return (
        <div>
            <h1>{groupeName}</h1>
            <div className="contentHome">
                <div className='leaveGroup'>
                    <a href="/home">Quitter le groupe</a>
                </div>
                <div className='cardGroup'>
                {user}
                </div>
            </div>
        </div>
    )
}


export default Groupe;