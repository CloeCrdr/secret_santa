import './App.css';
import React from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register'
import Groupe from './components/Groupe';
import CreateGroup from './components/CreateGroup';
import EditProfile from './components/EditProfile';
import {BrowserRouter, NavLink, Routes, Route, Redirect} from 'react-router-dom';
import axios from 'axios';



class App extends React.Component {


  constructor(props) {
    super(props);
  }

  componentDidMount(){}
    
  render () {

    return (
      <BrowserRouter >
        <div className="App">
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
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/groupe/:id" element={<Groupe/>} />
            <Route path="/creategroup" element={<CreateGroup/>} />
            <Route path="/editprofile" element={<EditProfile/>} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
