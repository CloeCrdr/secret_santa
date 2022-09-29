import React, { Component } from 'react';

class Groupe extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user: [],
            DataisLoaded: false
        }
    }

    componentDidMount (){
        fetch('http://localhost:3001/group/1')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
              user: json,
              DataisLoaded: true
            });
        })
        console.log(this.state.user)
    }

    render() {
        return (
            <div>        
                <div>
                    <h1>Groupe 1</h1>
                    <ul>
                        <li>
                            {this.state.user[0] ? this.state.user[0].prenom : null} {this.state.user[0] ? this.state.user[0].nom : null}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Groupe;