import React,{Component} from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
            users: [],
            groupes: [],
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
        })   

        fetch('http://localhost:3001/group')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
              groupes: json,
              DataisLoaded: true
            });
            console.log(this.state.groupes)
        }) 
      } 

      render() {
    return (
        <div>
            <h1>My profile</h1>
            <div className="contentHome">
                <div className='editProfile'>
                    <a href="/editprofile">Edit my profile</a>
                </div>
                <div className='flexProfile'>
                    <div className='groups'>
                        <span>
                            Groupe 1 - <a href="">Voir</a>
                        </span>
                        <span>
                            Groupe 2 - <a href="">Voir</a>
                        </span>
                        <span>
                            Groupe 3 - <a href="">Voir</a>
                        </span>
                    </div>
                    <div className='profile'>
                        <div className='userInfos'>
                            <img src="https://icones.pro/wp-content/uploads/2022/05/icones-de-noel-pere-noel-roxo.png"/>
                            <div className="infos">
                                <div className="userName">
                                    <span>Nom</span> Prénom
                                </div>
                                <div className="userEmail">Email</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
}
export default Profile;
