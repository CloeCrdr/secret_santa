import React, { useState, useEffect }  from 'react';
import Session from 'react-session-api'


const Home = () => {

    const [users,setUsers] = useState([])
    const [groupes,setGroupes] = useState([])
    // let users = []

    useEffect(() => {
        fetch('http://localhost:3001/group')
        .then((res) => res.json())
        .then((json) => {
            setGroupes(json)
            console.log(groupes)
         });
        
        fetch('http://localhost:3001/user')
        .then((res) => res.json())
        .then((json) => {
            setUsers(json)kout  
                // setDataisLoaded(true)
        }) 
        
    },[]) 

    return (
        <div>
            <h1>Homepage</h1>
            <div className='contentHome'>
                <div className='addSecretSanta'>
                    <a href="/CreateGroup">Créer un groupe</a>
                </div>
                <div className='cardsGroupHome'>
                    <div className='cardHome'>
                    {groupes.map(groupe => <div key={groupe.id}>
                        <div className='name'>
                            <strong>{groupe.nom}</strong>
                            <span>
                                créé par <em>{groupe.admin} </em>
                            </span>
                        </div>
                        <div>
                            <div className='places'></div>
                            <a href={`/groupe/${groupe.id}`} className='groupe'>Voir le groupe</a>
                        </div>
                    </div>)}
                    </div>
                    <div className='cardHome'>
                        <div>
                            <div className='name'>
                                <strong>Nom du groupe</strong>
                                <span>
                                    créé par <em>{users[0] ? users[0].prenom : null} {users[0] ? users[0].nom : null}</em>
                                </span>
                            </div>
                            <div>
                                <div className='places'>N/X places</div>
                                <a href="/groupe" className='groupe'>Rejoindre</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
