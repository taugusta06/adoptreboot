import React, { Component } from 'react';
import './Mypets.css';
import Saved from '../../components/Saved/Saved';


class Mypets extends Component {
  render() {
    return (
      <div className="searchResults">
      <h2 id="resultHeader">Your Saved Pets</h2>
        <div className="Mypets">
          <Saved />
        </div>
      </div>
    );
  }
}

export default Mypets;
