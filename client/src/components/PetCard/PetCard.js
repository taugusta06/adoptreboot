import React from "react";
import './PetCard.css'
const PetCard = props => (
  <div className={`card${props.shake ? " shake" : ""}`}>
  <p><strong>name:</strong> {props.name}</p>
    <div className="img-container">
      <img alt="animalPicture" src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>id:</strong> {props.id}
        </li>
        <li>
          <strong>animal:</strong> {props.animal}
        </li>
        <li>
          <strong>breed:</strong> {props.breed}
        </li>
        <li>
          <strong>age:</strong> {props.age}
        </li>
        <li>
          <strong>sex:</strong> {props.sex}
        </li>
      </ul>
      <button onClick={props.savePet}>Save Pet</button>
      <button>View Pet</button>
    </div>
  </div>
);

export default PetCard;