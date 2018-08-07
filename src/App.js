import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import News from "./Components/News";
import CustomNavbar from "./Components/CustomNavbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <CustomNavbar />
          <Route path="/" component={Home} exact/>
          <Route  path="/About" component={About} />
          <Route path="/News" component={News} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;