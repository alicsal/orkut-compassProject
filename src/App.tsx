
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe o BrowserRouter e outros componentes necessários
import './App.css';
import Login from '../src/components/Login/Login';
import Profile from '../src/components/Profile/Profile';
import Header from './components/Header/Header';


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (

    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;

