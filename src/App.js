import React, { Component } from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    state = {
        "name": "bob"
    }
    
    render () {
        return (
            <Router>
              <div className="app">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/about" component={ About } />
                    <Route path="/posts/:post_id" component={ Post } />
                </Switch>            
              </div>
            </Router>
        );
    }
}

export default App;