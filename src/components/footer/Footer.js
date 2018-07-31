import React, { Component } from 'react';
import './Footer.css';
import imgFB from './facebook.png';
import imgInsta from './instagram.png';
import imgTwitter from './twitter.png';
import Navbar from '../navbar/Navbar'

class Footer extends Component {

    clicar(){
       prompt('Digite aqui seu email...');
    }

    render() {
        return (
            <footer>
                <p>Lorem ipsum...</p>
                <Navbar />
                <div className='botoes'>
                    <button onClick={this.clicar}>Fale Conosco!</button>
                    <div className='social'>
                        <img src={imgFB} alt="Facebook" />
                        <img src={imgInsta} alt="Instagram" />
                        <img src={imgTwitter} alt="Twitter" />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;