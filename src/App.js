import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <Router>      
      <div>      
        <Header />

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>        
        <Route path="/cart" component={Cart}/>                

        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;