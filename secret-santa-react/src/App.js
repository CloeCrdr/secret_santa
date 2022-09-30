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

class App extends React.Component {

  connectUser;

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log();
  }

  handleCallback = (childData) =>{
    this.connectUser = childData;
    console.log(this.connectUser);
  }
    
  render () {

    return (
      <BrowserRouter >
        <div className="App">
        {/* {this.connectUser ?
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
        } */}

          <header className="App-header">
            <nav className="navbar">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/profile">Profile</NavLink>
            </nav>
            <nav className="navLog">
              <NavLink to="/login">Login</NavLink> 
              <NavLink to="/register">Register</NavLink>
            </nav>
          </header>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login parentCallback={this.handleCallback} />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/groupe/:id" element={<Groupe/>} />
            <Route path="/creategroup" element={<CreateGroup/>} />
            <Route path="/editprofile" element={<EditProfile/>} />
            <Route path="/" element={<Index/>} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
