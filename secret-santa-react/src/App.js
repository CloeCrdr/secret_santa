import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register'
import Groupe from './components/Groupe';
import CreateGroup from './components/CreateGroup';
import EditProfile from './components/EditProfile';
import Index from './components/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () => {

  const [connect, setConnect] = useState(false)

  console.log(connect)
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar connect={connect} setConnect={setConnect} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login connect={connect} setConnect={setConnect}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/groupe/:id" element={<Groupe />} />
          <Route path="/creategroup" element={<CreateGroup />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
