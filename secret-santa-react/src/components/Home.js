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
            console.log(this.state.groupes)
        }) 
      }       
    render(){
        
        const groupes = this.state.groupes.map((groupe) =>
        
            <div key={groupe.id}>
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
            </div>
        );

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
