import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
