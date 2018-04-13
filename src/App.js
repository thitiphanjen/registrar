import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      studentID : null
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Login onLogin={studentID => this.setState({studentID})} />}/>
          <Route path="/home" render={() => <Home studentID={this.state.studentID} />}/>
          {console.log('this is in app ' + this.state.studentID)}
        </div>
      </Router>
    );
  }
}

export default App;