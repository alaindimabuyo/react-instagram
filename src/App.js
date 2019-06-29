import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InstagramState from "./context/Instagram/InstagramState";
import InstagramOwner from "./components/owner/InstagramOwner";
import "./App.css";

function App() {
  return (
    <InstagramState>
      <Router>
        <div className='App'>
          <Navbar />
          <InstagramOwner />
        </div>
      </Router>
    </InstagramState>
  );
}

export default App;
