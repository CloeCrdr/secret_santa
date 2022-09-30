import React,{Component} from 'react';

class Profile extends React.Component {
    userId;

    constructor(props) {
        super(props);
      
        this.state = {
            user: [],
            groupes: [],
            DataisLoaded: false
        };
    }

    componentDidMount (){
        this.userId = window.location.href.split("/").pop();

        fetch(`http://localhost:3001/user/1`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                user: json,
                DataisLoaded: true
            });
        })

        fetch(`http://localhost:3001/group/profile/1`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                groupes: json,
            });
        }) 
    } 

    render() {
        const groupes = this.state.groupes.map((groupe) =>
        
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
                           {groupes}
                        </div>
                        <div className='profile'>
                            <div className='userInfos'>
                                <img src="https://icones.pro/wp-content/uploads/2022/05/icones-de-noel-pere-noel-roxo.png"/>
                                <div className="infos">
                                    <div className="userName">
                                        <span>{this.state.user[0]?.nom}</span> {this.state.user[0]?.prenom}
                                    </div>
                                    <div className="userEmail">{this.state.user[0]?.email}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;
