import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import {Input, Menu} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Router>      
      <div>      
        <Header />

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
    );
  }
}

export default App;