import React,{Component} from 'react';



class Home extends React.Component {
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
        }) 
      }       
    render(){
        return (
            <div>
             {this.state.groupes.length > 0 ? console.log(this.state.groupes) : console.log('no data')} 
                <h1>Homepage</h1>         
                <div className='contentHome'>
                    <div className='addSecretSanta'>
                    <a href="/CreateGroup">Créer un groupe</a>
                    </div>
                    {
                        this.state.groupes.forEach((data) => {
                            console.log(data)
                        })
                    }
                    <div className='cardsGroupHome'>
                        <div className='cardHome'>
                            <div>
                                <div className='name'>
                                    <strong>Nom du groupe</strong>
                                    <span>
                                        créé par <em>{this.state.users[0] ? this.state.users[0].prenom : null} {this.state.users[0] ? this.state.users[0].nom : null}</em>
                                    </span>
                                </div>
                                <div>
                                    <div className='places'>
                                    
                                    </div>
                                    <a href="/groupe" className='groupe'>Voir le groupe</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardHome'>
                            <div>
                                <div className='name'>
                                    <strong>Nom du groupe</strong>
                                    <span>
                                        créé par <em>{this.state.users[0] ? this.state.users[0].prenom : null} {this.state.users[0] ? this.state.users[0].nom : null}</em>
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
}

export default Home;
