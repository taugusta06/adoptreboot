import React, {Component} from 'react';
import './Footer.css';
var Facebook = require('./images/faceBook-blue.png');
var Twitter = require('./images/tw-bl-sm.png');
class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
            <div className='social-media-links'>
            <img src={Facebook} className='socialmedia-fb' alt='Facebok'></img>
            <img src={Twitter} className='socialmedia-tw' alt='Twitter'></img>
            </div>
            </div>
        );
    }
}
export default Footer;