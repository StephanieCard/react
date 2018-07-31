import React, { Component } from 'react';
import './Loginform.css';

class Loginform extends Component {
  render() {
    return (
    <section className = 'login'>
        <h2>Digite suas credenciais</h2>
        <input type="text" placeholder="Digite seu nome de usuário" />
        <input type="password" placeholder="Digite sua senha" /> 
    </section>
    );
  }
}

export default Loginform;
