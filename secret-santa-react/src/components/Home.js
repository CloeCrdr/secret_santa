import React, { useState, useEffect }  from 'react';
import Session from 'react-session-api'


const Home = () => {

    const [users,setUsers] = useState([])
    const [groupes,setGroupes] = useState([])
    const [dataIsLoaded,setDataIsLoaded] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3001/user')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    users: json,
                    DataisLoaded: true
                });
            })

            fetch('http://localhost:3001/group')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    groupes: json,
                    DataisLoaded: true
                });
            }) 
    })

    return (
        <div>
            <h1>Homepage</h1>
            <div className='contentHome'>
                <div className='addSecretSanta'>
                    <a href="/CreateGroup">Créer un groupe</a>
                </div>

                <div className='cardsGroupHome'>
                    <div className='cardHome'>
                        {groupes}
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
