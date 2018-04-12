import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;