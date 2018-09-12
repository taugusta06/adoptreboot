import React, { Component } from 'react';
import './Search.css';
import PetCard from '../../components/PetCard/PetCard';


class Search extends Component {
  render() {
    return (
      <div className="searchResults">
      <h2 id="resultHeader">Your Pet Options from your {this.props.name}</h2>
        <div className="Search">
          <PetCard />
        </div>
      </div>
    );
  }
}

export default Search;
