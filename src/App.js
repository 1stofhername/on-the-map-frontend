import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import DiscoverPage from './components/DiscoverPage';
import CreatePostPage from './components/CreatePostPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>On The Map</h4>
      </header>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/create-post" element={ <CreatePostPage />} />
        <Route path='/login' element={ <LoginPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
