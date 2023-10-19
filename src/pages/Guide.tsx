import React from 'react';
import logo from './logo.svg';
import {Routes,Route} from "react-router-dom"

function App() {

  function GetColor(value:any){
    if (value.includes("HRAD")) {
      return "#989595"
    }
    else if (value.includes("ZAMKY")) {
      return "#cdc1c1"
    }
    else if (value.includes("ROZHL")) {
      return "#90d285"
    }
    else if (value.includes("KINA")) {
      return "#6b8ea4"
    }
    else if (value.includes("DIVFILH")) {
      return "#9c7e5f"
    }
    else if (value.includes("KLUB")) {
      return "#14aad0"
    }
  }

  return (
    <div className="App">
        
    </div>
  );
}

export default App;
