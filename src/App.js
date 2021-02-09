import React, { useState, useEffect } from 'react';
import DogContainer from './Containers/DogContainer'
import Dog from './Components/Dog'
import './App.css';

const baseUrl = `http://localhost:3000/`
const dogsUrl = baseUrl + `pups/`

const App =( )=> {

  const [ dogs, setDogs ] = useState( [] )
  const [ dog, setDog ] = useState( null )
  const [ filter, setFilter ] = useState( false )

  useEffect( ()=> fetchAllDogs(), ( [] ))

  const fetchAllDogs =( )=> {
    fetch( dogsUrl )
    .then( res => res.json() )
    .then( dogsData => setDogs( dogsData ) )
  }

  const filterDogs =( )=> 
    filter ?
    dogs.filter( dog => dog.isGoodDog )
    :
    dogs

  return (
    <div className="App">
      
      <div id="filter-div">
        <button 
          id="good-dog-filter"
          onClick = { ()=> setFilter( !filter ) }
        >
            Filter good dogs: { filter ? 'ON' : 'OFF' }
        </button>
      </div>
      
      <div>
        <DogContainer 
          dogs = { filterDogs() }
          setDog = { setDog }
        />
      </div>
      
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          { dog ?
            <Dog
              dog = { dog }
            />
            :
            null
          }
        </div>
      </div>
    
    </div>
  );
}

export default App;
