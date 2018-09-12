import React, { Component } from "react";
import "./Mypets.css";
import Saved from "../../components/Saved/Saved";

function renderPets(props) {
  if (props.savedPets.length > 0) {
    return props.savedPets.map(pet => {
      return (
        <Saved
          removePet={() => props.removePet(pet)}
          key={pet.id}
          {...pet}
        />
      );
    });
  } else {
    return (
      <div className="no-data">
        <h1>There is no pets to display!</h1>
      </div>
    );
  }
}

const Mypets = props => {
  return (
    <div className="searchResults">
      <h2 id="resultHeader">Your Saved Pets</h2>
      <div className="Mypets">
        {renderPets(props)}
      </div>
    </div>
  );
};

export default Mypets;
