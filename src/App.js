import React, { Component } from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
    state = {
        "name": "bob"
    }
    
    render () {
        return (
            <Router>
              <div className="app">
                <Navbar />
                <Route exact path="/" component={ Home }/>
                <Route path="/about" component={ About }/>
              </div>
            </Router>
        );
    }
}

export default App;