import React, { useState, useEffect } from 'react';
import './App.css';

const baseUrl = `http://localhost:3000/`
const dogsUrl = baseUrl + `pups/`

const App =( )=> {

  const [ dogs, setDogs ] = useState( [] )
  const [ dog, setDog ] = useState( {} )

  useEffect( ()=> {
    fetch( dogsUrl )
    .then( res => res.json() )
    .then( dogsData => setDogs( dogsData ) )
  }, ( [] ))

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">

      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">

        </div>
      </div>
    </div>
  );
}

export default App;
