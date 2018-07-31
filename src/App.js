import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Loginform from './components/loginform/Loginform';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Loginform />
        <Footer />
      </div>
    );
  }
}

export default App;
