import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import News from "./Components/News";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
           <Route  path="/" component={About} />
            <Route path="/" component={News} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
