import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Banner/>
          <Nav/>
          <Services/>
          <About/>
          <Prices/>
          <Contact/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/services'>
          <Services/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Redirect from="/Login" to="/dashboard" />
        <Route path='/dashboard'>
          <Dashboard/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
