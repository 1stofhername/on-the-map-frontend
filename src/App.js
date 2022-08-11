import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>On The Map</h1>
      </header>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
