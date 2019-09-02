import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Products from './components/pages/Products'
import Contact from './components/pages/Contact'

// Navigation Bar
import Navbar from './components/NavigationBar';
import Footer from './components/FooterBar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component = {Home}/>
      <Route path="/about" component = {About}/>
      <Route path="/products" component = {Products}/>
      <Route path="/contact" component = {Contact}/>
      <Footer/>
    </Router>
  );
}

export default App;
