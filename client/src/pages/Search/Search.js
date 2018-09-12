import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pet from "../../utils/Pet";
import "./Search.css";
import PetCard from "../../components/PetCard/PetCard";

function renderPets(props) {
  if (props.searchResults.length > 0) {
    return props.searchResults.map(pet => {
      const newPet = new Pet(pet);
      return (
        <PetCard
          key={pet.id.$t}
          savePet={() => props.savePet(newPet)}
          {...newPet}
        />
      );
    });
  } else {
    return (
      <div className="no-data">
        <h1>There is no pets to display!</h1>
        <h3>
          Please go and search at the <Link to="/">home</Link> page!{" "}
        </h3>
      </div>
    );
  }
}

const Search = props => {
  return (
    <div className="searchResults">
      <h2 id="resultHeader">Your Pet Options</h2>
      <div className="Search">{renderPets(props)}</div>
    </div>
  );
};

export default Search;
