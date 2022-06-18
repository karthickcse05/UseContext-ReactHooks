import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import ChildComponents from "../src/ChildComponents"

export const userDetailsContext = React.createContext(null);
function App() {
   
   var [userDetails, setUserDetails] = useState({
    name: "Karthick",
    age:32
   });
    return (
      <userDetailsContext.Provider value={userDetails}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ChildComponents></ChildComponents>
    </div>
    </userDetailsContext.Provider>
  );
}

export default App;
