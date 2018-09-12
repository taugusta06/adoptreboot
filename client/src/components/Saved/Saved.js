import React from 'react';
import './Saved.css'

const Saved = props => (
    <div className={`card${props.shake ? " shake" : ""}`}>
    <p><strong>name:</strong> {props.name}</p>
      <div className="img-container">
        <img className='pict' alt="animalPicture" src={props.image} />
      </div>
      <div className="content">
        <ul>
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
      </div>
      <button className='buttons'>View Pet</button>
      <button onClick={() => props.removePet(props.id)} className="remove">
        Remove
      </button>
    </div>
  );

export default Saved;