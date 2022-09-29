import React, { Component } from 'react';


class Groupe extends React.Component{

    groupeId;
    groupeName;

    constructor(props){
        super(props);
        this.state = {
            users: [],
            DataisLoaded: false
        }
    }

    componentDidMount (){

        this.groupeId = window.location.href.split("/").pop();

        fetch(`http://localhost:3001/group/${this.groupeId}`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
              users: json,
              DataisLoaded: true,
            });
            this.groupeName = this.state.users[0]?.groupe
        })
    }

    render() {
        const users = this.state.users.map((user) => 
            <div key={user.id}>
                <div className='user'>
                    <strong>{user.prenom + ' ' + user.nom}</strong>
                    <span>{user.email}</span>
                </div> 
            </div>
        );

        return (
            <div>
                <h1>{this.groupeName}</h1>
                <div className="contentHome">
                    <div className='leaveGroup'>
                        <a href="/home">Quitter le groupe</a>
                    </div>
                    <div className='cardGroup'>
                    {users}
                    </div>
                </div>
            </div>
        )
    }
}

export default Groupe;