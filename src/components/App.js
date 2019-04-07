import React, { Component } from "react";

class App extends Component {
    state = {
        "name": "bob"
    }
    
    render () {
        return (
            <div className="app">
              <h1>Hello { this.state.name }</h1>
            </div>
        );
    }
}


export default App;