import './App.css';
import React from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register'
import Groupe from './components/Groupe';
import CreateGroup from './components/CreateGroup';
import EditProfile from './components/EditProfile';
import Index from './components/Index';
import {BrowserRouter, NavLink, Routes, Route, Redirect} from 'react-router-dom';
import Session from 'react-session-api'

class App extends React.Component {

  connect;

  constructor(props) {
    super(props);
    this.state = {
        connect: undefined,
    }
  };
  
//   authenticate (){
//     const d = new Date();
//     const test = d.toLocaleDateString();
//     if(test === sessionStorage.getItem('testSession')){
//         return true;
//     }else{
//         return false;
//     }
// }

  componentDidMount(){
    console.log('App.js mounted');
    this.setState({connect: Session.get('connectUser')})
    // this.state.connect = Session.get('connectUser');
    // setInterval(() => {
    //   if (Session.get('connectUser') !== this.state.connect) {
    //     console.log('new', Session.get('connectUser'));
    //     this.render();
    //   }
    // }, 1000);
  }
    
  render() {

    return (
      <BrowserRouter>
        <div className="App">
        {this.state.connect ?
          <header className="App-header">
            <nav className="navbar">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/profile">Profile</NavLink>
            </nav>
            <nav className="navLog">
              <NavLink to="/login">Deconnexion</NavLink>
            </nav>
          </header> :
          <header className="App-header">
            <nav className="navbar">
            </nav>
            <nav className="navLog">
              <NavLink to="/login">Login</NavLink> 
              <NavLink to="/register">Register</NavLink>
            </nav>
          </header>
        }

          {/* <header className="App-header">
            <nav className="navbar">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/profile">Profile</NavLink>
            </nav>
            <nav className="navLog">
              <NavLink to="/login">Login</NavLink> 
              <NavLink to="/register">Register</NavLink>
            </nav>
          </header> */}
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/groupe/:id" element={<Groupe/>} />
            <Route path="/creategroup" element={<CreateGroup/>} />
            <Route path="/editprofile" element={<EditProfile/>} />
            <Route path="/" element={<Index/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
