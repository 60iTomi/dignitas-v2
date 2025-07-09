import './App.css';
import './fonts/NimbusSanL.css';
import './fonts/MaterialIcons.css';
import './fonts/SpaceMono.css';
import { Entry } from './pages';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/entry" element={<Entry />} />
    </Routes>
  );
}

export default App;
