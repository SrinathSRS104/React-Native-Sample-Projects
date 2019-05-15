import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from "./components/navBar"
import Footer from "./components/footer"
import Home from "./components/Home"
import Team from "./components/Team"
import User from "./components/User"
import About from "./components/About"
import Trend from "./components/Trend"

function App() {
  return (
    <Router>
    <div className="masterDiv"> 
      <div className="container">
        <div className="nav">
          <NavBar />
        </div>
        <div className="bodyIn">
          <Route exact path="/" render={ () => <Home title="Home"/>}/>
          <Route path="/team" render={ () => <Team/>}/>
          <Route path="/user" render={ () => <User/>}/>
          <Route path="/trend" render={ () => <Trend/>}/>
          <Route path="/about" render={ () => <About/>}/>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
