import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Guide from "./pages/Guide"
import Parking from "./pages/Parking"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <nav>
  <a href='/pamatky'>Pamatky</a>
  <a href='/parkovani'>Parkovani</a>
</nav>
<React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/pamatky' element={<Guide />} />
          <Route path='/parkovani' element={<Parking />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
