import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Projects from "./components/Projects";
import Blog from "./components/Blogs/Blogs";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Banner/>
          <Nav/>
          <Projects/>
          <About/>
          <Blog/>
          <Prices/>
          <Contact/>
        </Route>
        <Route path='/projects'>
          <Projects/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/Blogs'>
          <Blog/>
        </Route>
        <Route path='/prices'>
          <Prices/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        
        </Switch>
    </Router>
  );
}

export default App;
