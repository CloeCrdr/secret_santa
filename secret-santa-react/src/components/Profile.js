import React, { useState, useEffect }  from 'react';

const Profile = () => {

    const [users,setUsers] = useState([])
    const [groupes,setGroupes] = useState([])
    // const [dataIsLoaded,setDataIsLoaded] = useState(false)

    useEffect(() => {
        let userId = window.location.href.split("/").pop();
        fetch(`http://localhost:3001/user/1`)
        .then((res) => res.json())
        .then((json) => {
            setUsers(json)
        })

        fetch(`http://localhost:3001/group/profile/1`)
        .then((res) => res.json())
        .then((json) => {
            setGroupes(json)
        }) 
    })

    const groupe =  groupes.map((groupe) =>
        
        <div key={groupe.id}>
            <span>
                {groupe.nom} <a href={`/groupe/${groupe.id}`}>Voir</a>
            </span>
        </div>
    );


    return (
        <div>
            <h1>My profile</h1>
            <div className="contentHome">
                <div className='editProfile'>
                    <a href="/editprofile">Edit my profile</a>
                </div>
                <div className='flexProfile'>
                    <div className='groups'>
                       {groupe}
                    </div>
                    <div className='profile'>
                        <div className='userInfos'>
                            <img src="https://icones.pro/wp-content/uploads/2022/05/icones-de-noel-pere-noel-roxo.png" alt=""/>
                            <div className="infos">
                                <div className="userName">
                                    <span>{users[0]?.nom}</span> {users[0]?.prenom}
                                </div>
                                <div className="userEmail">{users[0]?.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;

