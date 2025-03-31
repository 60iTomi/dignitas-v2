import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import './App.css';
import './fonts/fonts-inter.css';
import './fonts/fonts-material.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

function RandomColour() {
  const primaries = ["#2cbf77ff", "#8d1313ff", "#3145acff", "#b66fcfff"];
  const secondaries = ["#031b11ff", "#1b0303ff", "#05031bff", "#130a19ff"];
  const root = document.documentElement;
  const randomColorIndex = Math.floor(Math.random() * primaries.length);
  root.style.setProperty('--primary-colour', primaries[randomColorIndex]);
  root.style.setProperty('--secondary-colour', secondaries[randomColorIndex]);
}


function App() {
  // RandomColour();

  return (
    <Router>
      <div className="body-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
