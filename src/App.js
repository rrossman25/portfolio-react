import React from 'react';
import './App.css';
import Nav from './nav';
import Footer from './footer';
import Home from './home';
import Binge from './binge';
import Pandemic from './pandemic';
import Helios from './helios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <Nav />
\\
      <Switch>
        <Route path="/pandemic">
          <Pandemic />
        </Route>
        <Route path="/helios">
          <Helios />
        </Route>
        <Route path="/binge">
          <Binge />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </div>
  </Router>
  );
}

export default App;
