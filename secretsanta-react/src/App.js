import './App.css';
import Home from './components/Home';
import {BrowserRouter, NavLink, Routes, Route, Redirect} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <NavLink to="/home">Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
          </nav>
          <Routes>
              <Route path="/home" element={<Home/>} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
