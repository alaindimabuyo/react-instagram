import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InstagramState from "./context/Instagram/InstagramState";
import Home from "./components/pages/Home";
import CurrentPhoto from "./components/Photos/CurrentPhoto";
import "./App.css";
import NotFound from "./components/pages/NotFound";

function App() {
  useEffect(() => {
    //initialize material js
    M.AutoInit();
  });

  return (
    <InstagramState>
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/photo/:id' component={CurrentPhoto} />
            <NotFound />
          </Switch>
        </div>
      </Router>
    </InstagramState>
  );
}

export default App;
