import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import DiscoverPage from './components/DiscoverPage';
import CreatePostPage from './components/CreatePost';
import LoginPage from './components/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  function handleLogin (data) {
    const {email, password}=data;
      fetch(`http://localhost:9292/login/${email}&${password}`)
      .then((r)=>r.json())
      .then((data)=>{
        setIsLoggedIn(true);
        setUser(data);
      })
      
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>On The Map</h4>
      </header>
      {isLoggedIn ? <NavBar /> : null}
      {!isLoggedIn? <LoginPage handleLogin={handleLogin} /> : null }
      <Routes>
        <Route path="/home" element={<Homepage logInStatus={isLoggedIn} user={user} />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/create-post" element={ <CreatePostPage />} />
        <Route path='/login' element={ <LoginPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
