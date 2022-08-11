import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import DiscoverPage from './components/DiscoverPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>On The Map</h1>
      </header>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/discover" element={<DiscoverPage />} />
      </Routes>
    </div>
  );
}

export default App;
