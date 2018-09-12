import React, {Component} from 'react';
import './Footer.css';
var Facebook = require('./images/faceBook-blue.png');
var Twitter = require('./images/tw-bl-sm.png');
class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
            <div className='social-media-links'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={Facebook} className='socialmedia-fb' alt='Facebok'></img></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={Twitter} className='socialmedia-tw' alt='Twitter'></img></a>
            </div>
            </div>
        );
    }
}
export default Footer;