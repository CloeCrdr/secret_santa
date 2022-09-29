import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import {BrowserRouter, NavLink, Routes, Route, Redirect} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
          </nav>
          <nav className="navLog">
            <NavLink>Login</NavLink>
            <NavLink>Register</NavLink>
          </nav>
        </header>
        <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
